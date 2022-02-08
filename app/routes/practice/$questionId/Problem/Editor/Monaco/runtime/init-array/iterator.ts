import { Vm } from '../Vm'
import { WrappedMethodsType, uselessLoc } from './index'

export default function createIteratorMethods(vm: Vm) {
  const forEach: WrappedMethodsType<'forEach'> = function* forEach(
    callback: Function,
    ...thisArg: [any]
  ) {
    if (thisArg.length) callback = callback.bind(thisArg[0])
    for (let i = 0; i < this.length; i++) {
      yield [vm.pushFrame(callback(this[i], i, this), 'forEach'), ...uselessLoc]
    }
    return [undefined, ...uselessLoc]
  }

  const map: WrappedMethodsType<'map'> = function* map(
    callback: Function,
    ...thisArg: [any]
  ) {
    if (thisArg.length) callback = callback.bind(thisArg[0])
    //声明一个空的数组
    let result = []
    //遍历数组
    for (let i = 0; i < this.length; i++) {
      //执行回调
      result.push(
        yield [vm.pushFrame(callback(this[i], i, this), 'map'), ...uselessLoc]
      )
    }
    //返回结果
    return [result, ...uselessLoc]
  }

  const flatMap: WrappedMethodsType<'flatMap'> = function* flatMap(
    callback: Function,
    ...thisArg: [any]
  ) {
    if (thisArg.length) callback = callback.bind(thisArg[0])
    //声明一个空的数组
    let result = []
    for (let i = 0; i < this.length; i++) {
      //执行回调
      result.push(
        yield [
          vm.pushFrame(callback(this[i], i, this), 'flatMap'),
          ...uselessLoc
        ]
      )
    }
    //返回结果
    return [result.flat(1), ...uselessLoc]
  }

  const filter: WrappedMethodsType<'filter'> = function* filter(
    callback: Function,
    ...thisArg: [any]
  ) {
    if (thisArg.length) callback = callback.bind(thisArg[0])
    //声明空数组
    let result = []
    //遍历数组
    for (let i = 0; i < this.length; i++) {
      //执行回调
      let res = yield [
        vm.pushFrame(callback(this[i], i, this), 'filter'),
        ...uselessLoc
      ]
      //判断 如果为真则压入到 result 结果中
      if (res) {
        result.push(this[i])
      }
    }
    //返回结果
    return [result, ...uselessLoc]
  }

  const find: WrappedMethodsType<'find'> = function* find(
    callback: Function,
    ...thisArg: [any]
  ) {
    if (thisArg.length) callback = callback.bind(thisArg[0])
    //遍历数组
    for (let i = 0; i < this.length; i++) {
      //执行回调
      let res = yield [
        vm.pushFrame(callback(this[i], i, this), 'find'),
        ...uselessLoc
      ]
      //判断
      if (res) {
        //返回当前正在遍历的元素
        return [this[i], ...uselessLoc]
      }
    }
    //如果没有遇到满足条件的 返回 undefined
    return [undefined, ...uselessLoc]
  }

  const findIndex: WrappedMethodsType<'findIndex'> = function* findIndex(
    callback: Function,
    ...thisArg: [any]
  ) {
    if (thisArg.length) callback = callback.bind(thisArg[0])
    //遍历数组
    for (let i = 0; i < this.length; i++) {
      //执行回调
      let res = yield [
        vm.pushFrame(callback(this[i], i, this), 'findIndex'),
        ...uselessLoc
      ]
      //判断
      if (res) {
        //返回当前正在遍历的元素
        return [i, ...uselessLoc]
      }
    }
    //如果没有遇到满足条件的 返回 undefined
    return [-1, ...uselessLoc]
  }

  const some: WrappedMethodsType<'some'> = function* some(
    callback: Function,
    ...thisArg: [any]
  ) {
    if (thisArg.length) callback = callback.bind(thisArg[0])
    //遍历数组
    for (let i = 0; i < this.length; i++) {
      // 执行回调 如果回调执行返回结果为 false
      if (
        yield [vm.pushFrame(callback(this[i], i, this), 'some'), ...uselessLoc]
      ) {
        return [true, ...uselessLoc]
      }
    }
    //如果都满足条件则返回 true
    return [false, ...uselessLoc]
  }

  const every: WrappedMethodsType<'every'> = function* every(
    callback: Function,
    ...thisArg: [any]
  ) {
    if (thisArg.length) callback = callback.bind(thisArg[0])
    //遍历数组
    for (let i = 0; i < this.length; i++) {
      // 执行回调 如果回调执行返回结果为 false
      if (
        !(yield [
          vm.pushFrame(callback(this[i], i, this), 'every'),
          ...uselessLoc
        ])
      ) {
        return [false, ...uselessLoc]
      }
    }
    //如果都满足条件则返回 true
    return [true, ...uselessLoc]
  }
  return {
    forEach,
    map,
    flatMap,
    filter,
    find,
    findIndex,
    some,
    every
  }
}
