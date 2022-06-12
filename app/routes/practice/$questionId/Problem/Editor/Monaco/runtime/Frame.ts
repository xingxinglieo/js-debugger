export type GetVariable = () => ExtendsionObject
export type GetBlock = { [key in string]: () => any }
export type LocType = [number, number, number, number]
export type YieldType = [any, ...LocType]

/* 无用的位置，用于表示编译出的代码位置， */
const unuseLoc = [-1, -1, -1, -1] as const

export class Frame {
  callee: string // 调用函数对象
  iterator: Generator<YieldType, YieldType> // 调用对应的迭代器

  /* 迭代器返回值 */
  state: { value: any; done?: boolean } = { value: undefined, done: false } // next 返回的 state
  error?: { reason: any } // 保留报错
  loc: LocType = [...unuseLoc] // 源码位置 [startline,startcolumn,endline,endcolumn]

  /* 记录当前栈帧的函数作用域变量、块级作用域变量以及闭包和 this */
  local: ExtendsionObject = {} // 获取函数作用域变量
  closure: ExtendsionObject = {} // 获取闭包变量
  blocks: ExtendsionObject[] = [] // 块级作用域栈
  $__this: any = undefined // this

  /* 编译时插入获取对应变量的函数 */
  getLocal: GetVariable = () => ({})
  getClosure: GetBlock = {}
  getBlocks: GetBlock[] = []

  constructor(iterator: Generator<YieldType, YieldType>, callee: string) {
    this.callee = callee // 编译时获取到的调用者全名
    this.iterator = iterator // 这个帧对应的函数调用
  }

  next(value: any) {
    /* try 可以捕获到迭代器中的错误 */
    try {
      let state = this.iterator.next(value)

      /* 
        state.value 理论上都 [any,number,number,number,number] 
        为 undefined 是某些返回值未转换(遗漏了)，需要兼容处理 
      */
      const newValue =
        state.value === undefined ? [undefined, ...unuseLoc] : state.value
      this.state = { value: newValue?.[0], done: state.done }

      /* @ts-ignore */
      this.loc = newValue?.slice(1, 5) ?? [...unuseLoc]
    } catch (e) {
      this.error = { reason: e }
    }
  }

  /* 设置获取函数中执行变量的注入函数 start */
  setGetLocal(getLocal: GetVariable) {
    this.getLocal = getLocal
    this.syncLocal()
  }

  setGetClosure(getClosure: GetBlock) {
    this.getClosure = getClosure
    this.syncClosure()
  }
  /* 块级作用域是一个栈，所以是 push */
  pushGetBlocks(getBlock: typeof this.getBlocks[0]) {
    /* 因为是正序遍历所以用 unshift */
    this.getBlocks.unshift(getBlock)
    this.syncBlocks()
  }

  popGetBlocks() {
    this.getBlocks.shift()
    this.syncBlocks()
  }
  setThis($__this: any) {
    this.$__this = $__this
  }
  /* end */

  /* 执行注入函数同步变量 */
  syncLocal() {
    return (this.local = this.getLocal())
  }

  syncClosure() {
    const obj: ExtendsionObject = {}
    return (this.closure = Object.keys(this.getClosure).reduce((obj, key) => {
      try {
        obj[key] = this.getClosure[key]()
      } catch (e) {
        obj[key] = undefined
      }
      return obj
    }, obj))
  }

  syncBlocks() {
    return (this.blocks = this.getBlocks.map(getBlock => {
      const obj: ExtendsionObject = {}
      return Object.keys(getBlock).reduce((obj, key) => {
        try {
          obj[key] = getBlock[key]()
        } catch (e) {
          obj[key] = undefined
        }
        return obj
      }, obj)
    }))
  }
}
