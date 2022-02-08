import { Vm } from '../Vm'
import { CallBack, uselessLoc } from './index'

export default function createReduceMethods(vm: Vm) {
  const reduce: (callback: CallBack, initValue: any) => ReturnType<CallBack> =
    function* reduce(this: any, callback, initValue) {
      //声明变量
      let result = initValue
      //执行回调
      for (let i = 0; i < this.length; i++) {
        //执行回调
        result = yield [
          vm.pushFrame(callback(result, this[i], i, this), 'reduce'),
          ...uselessLoc
        ]
      }
      //返回最终的结果
      return [result, ...uselessLoc]
    }
  const reduceRight: (
    callback: CallBack,
    initValue: any
  ) => ReturnType<CallBack> = function* reduceRight(
    this: any,
    callback,
    initValue
  ) {
    //声明变量
    let result = initValue
    //执行回调
    for (let i = this.length - 1; i >= 0; i--) {
      //执行回调
      result = yield [
        vm.pushFrame(
          callback(result, this[i], i, this) as ReturnType<CallBack>,
          'reduceRight'
        ),
        ...uselessLoc
      ]
    }
    //返回最终的结果
    return [result, ...uselessLoc]
  }
  return { reduce,reduceRight }
}
