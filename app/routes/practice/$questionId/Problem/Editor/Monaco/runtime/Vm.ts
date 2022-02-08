import initArray from './init-array/index'
import initString from './initString'
import { Frame, GetVariable, GetBlock, YieldType } from './Frame'
import { Module } from './Module'
import { UNI_PREFIX, COMMON_PREFIX } from '~/config'
const unuseFrame = new Frame(
  (function* (): Generator<any, [any, -1, -1, -1, -1], any> {
    return [undefined, -1, -1, -1, -1]
  })(),
  'null'
)

export class Vm {
  stack: Frame[] = [] // 调用栈
  module: Module // 沙箱

  /* 构造函数传入 */
  traslatedCode: string // 转换后的代码
  errorCallback: (e: any) => any // 错误回调
  warnCallback: (e: string) => any // 错误回调
  error: any = null

  /* 步数 */
  stepCount = 0 // 实际执行步数
  originStep = 0 // 在源代码暂停的步数

  /* 断点 */
  breakPointLines: number[] = [] // 断点行

  /* 函数执行记录 */
  nextFrame?: Frame // 即将入栈帧，用于函数执行
  lastValue: { set: boolean; value: any } = { set: false, value: undefined } // 保存入栈前的返回值，用于函数执行

  static instance: Vm // 配合 getInstance 单例模式

  /**
   * 传入编译后的代码和执行错误时的回调
   * @param {string} traslatedCode
   * @param {(e: any) => void} [errorCallback=(e: any) => {
   *       throw e
   *     }]
   * @memberof Vm
   */
  constructor(
    traslatedCode: string,
    errorCallback: (e: any) => void = (e: any) => {
      throw e
    },
    warnCallback = (e: string) => {
      console.warn(e)
    }
  ) {
    initArray(this)
    initString(this)
    this.stack[-1] = unuseFrame // 防止越界
    this.traslatedCode = traslatedCode
    this.errorCallback = errorCallback
    this.warnCallback = warnCallback
    this.module = new Module()
    this.module.compile(traslatedCode, {
      [UNI_PREFIX + 'vm']: this,
      [UNI_PREFIX + 'temp']: undefined
    })
  }

  /* 重置当前 vm 的 */
  reset(traslatedCode: string) {
    this.stack = []
    this.stack[-1] = unuseFrame
    this.error = null
    this.stepCount = 0
    this.originStep = 0
    this.nextFrame = undefined
    this.lastValue = { set: false, value: undefined }
    this.traslatedCode = traslatedCode
    this.module = new Module()
    this.module.compile(traslatedCode, {
      [UNI_PREFIX + 'vm']: this,
      [UNI_PREFIX + 'temp']: undefined
    })
  }

  /* 单例模式 */
  static getInstance(traslatedCode: string, errorCallback?: (e: any) => void) {
    if (this.instance) return this.instance
    else return (this.instance = new this(traslatedCode, errorCallback))
  }
  setErrorCallbak(callback: (e: any) => void) {
    this.errorCallback = callback
  }
  throwError(e: any) {
    this.error = e
    this.errorCallback(e)
  }

  get lastFrame() {
    return this.stack[this.stack.length - 1]
  }

  get lastState() {
    return this.lastFrame.state
  }

  get isError() {
    return this.error !== null
  }

  /* 结束的两种情况：错误、执行结束 */
  get done() {
    return (
      this.error || (this.stack.length === 0 && this.nextFrame === undefined)
    )
  }

  /* 执行在源码中的下一步 */
  step() {
    /* 如果 done，说明上个函数帧执行完成，需要弹出  */
    if (this.lastState.done) {
      const preFrame = this.popFrame()!
      /* 保存弹出函数帧的返回值，等待下一步传出 */
      this.lastValue = { set: true, value: preFrame.state.value }
      /* 当前栈顶表达式值为弹出函数帧的返回值 */
      this.lastFrame.state.value = preFrame.state.value
      /* 此步只弹出帧，不执行实际代码 */
      return console.log('popFrame')
    }

    /* 已经执行完毕，直接返回 */
    if (this.done) {
      this.stepCount = 0
      return console.log(this.module.exports)
    }

    /* 如果上一步为弹出帧，会从 lastValue 获取返回值 */
    const value = this.lastValue.set
      ? ((this.lastValue.set = false), this.lastValue.value)
      : /* 否则从 lastValue 获取 */
        this.lastState.value

    /* 执行下一步 */
    this.lastFrame.next(value)

    /* 如果刚刚执行步骤是入栈帧，此步仅为入栈帧，不执行实际步骤 */
    if (this.nextFrame) {
      this.nextFrame.loc = this.lastFrame.loc
      this.stack.push(this.nextFrame)
      this.lastFrame.state.value = 'push frame'
      this.nextFrame = undefined
    }
    /* 实际执行步骤计数 */
    this.stepCount++

    /* 如果执行出错 */
    if (this.lastFrame.error) {
      if (this.lastFrame.loc[0] > 0) {
        this.lastFrame.error.reason.message += `, the last step at ${this.lastFrame.loc[0]}:${this.lastFrame.loc[1]}`
      }
      return this.throwError(this.lastFrame.error.reason)
    }

    /* 如果 loc[0] < 0，说明是编译代码执行，非映射到源码，继续执行下一次 */
    if (this.lastFrame.loc[0] < 0) {
      this.step()
    } else {
      /* 源码执行步骤计数 */
      this.originStep++
      this.syncVariable()
    }
  }

  /* 执行至结束或断点 */
  excute() {
    const getbreakPointLine = () =>
      this.breakPointLines.find(line => {
        const [startLine, endLine] = [
          this.lastFrame.loc[0],
          this.lastFrame.loc[2]
        ]
        console.log(line, startLine, endLine)
        return line >= startLine && line <= endLine
      })
    /* 
      1、执行结束
      2、debugger 声明
      3、执行步数超过 10000 可能无限循环
      4、编辑器断点
    */
    do {
      this.step()
    } while (
      !this.done &&
      this.lastState.value !== UNI_PREFIX + 'debugger' &&
      this.stepCount < 10000 &&
      getbreakPointLine() === undefined
    )

    if (this.stepCount >= 10000) {
      this.warnCallback('程序执行超过10000步，可能处于无限循环中，已暂停')
      this.stepCount = 0
    }

    return this.module.exports
  }

  /* 函数执行前调用 */
  pushFrame(
    iterator: Generator<YieldType, YieldType>,
    callee: string = 'anonymous'
  ) {
    /* 如果是原生的函数，如 console.log，直接返回 */
    if (
      Object.prototype.toString.call(iterator?.constructor) !==
      '[object GeneratorFunction]'
    ) {
      return iterator
    }
    const nextFrame = new Frame(iterator, callee)

    /* 函数初始执行的情况，直接入栈 */
    if (this.stack.length === 0) {
      return this.stack.push(nextFrame), 'push frame'
    }
    /* 否则，设置 nextFrame 准备入栈 */
    return (this.nextFrame = nextFrame), 'push frame'
  }

  popFrame() {
    return this.stack.pop()
  }

  /* 函数执行时，进入一个块级作用域时调用 */
  pushGetBlocks(getBlock: { [key in string]: () => any }) {
    this.lastFrame.pushGetBlocks(getBlock)
  }

  popGetBlocks() {
    this.lastFrame.popGetBlocks()
  }

  /* 进入函数作用域调用 */
  initVariable({
    getLocal = () => ({}),
    getClosure = {},
    $__this
  }: {
    getLocal: GetVariable
    getClosure: GetBlock
    $__this: any
  }) {
    this.lastFrame.setGetLocal(getLocal)
    this.lastFrame.setGetClosure(getClosure)
    this.lastFrame.setThis($__this)
  }

  /* 同步变量显示 */
  syncVariable() {
    /* 因为变量更改可能会影响其他作用域的变量（修改闭包变量），所以需要全部遍历 */
    for (let frame of this.stack) {
      frame.syncLocal()
      frame.syncClosure()
      frame.syncBlocks()
    }
  }

  /* 用于取代 new 关键字函数 ps: new A(...args) -> vm.New(new A(...args),...args) */
  New(instance: any, ...args: any[]) {
    /* 获取类的编译后的构造函数 */
    var _constructor:
      | undefined
      | ((...args: any[]) => Generator<YieldType, YieldType>) =
      Object.getPrototypeOf(instance)[COMMON_PREFIX + 'constructor']

    /* 如果 $_construct 不存在，说明是原生类，直接返回实例，否则执行编译后的构造函数 */
    if (!_constructor) {
      return instance
    } else this.pushFrame(_constructor.apply(instance, args))
  }
}
