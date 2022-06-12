import { Vm } from '../Vm'
import createIteratorMethods from './iterator'
import createReduceMethods from './reduce'
import createSortMethods from './sort'

export type ValueWithLoc<T = any> = [T, number, number, number, number]

export type CallBack<T = any> = (
  ...args: any[]
) => Generator<any, ValueWithLoc, any>

export type WrappedMethodsType<K extends keyof Array<any>> = (
  this: Array<any>,
  ...args: Parameters<Array<any>[K]>
) => Generator<any, ValueWithLoc<ReturnType<Array<any>[K]>>, any>

export const uselessLoc: [number, number, number, number] = [-1, -1, -1, -1]

const createWrappedMethods = (vm: Vm) => {
  return {
    ...createIteratorMethods(vm),
    ...createReduceMethods(vm),
    ...createSortMethods(vm)
  }
}

const methods = Object.keys(
  createWrappedMethods({} as any)
) as (keyof ReturnType<typeof createWrappedMethods>)[]
const originMethods = methods.reduce((obj, key: typeof methods[0]) => {
  obj[key] = Array.prototype[key]
  return obj
}, {} as ExtendsionObject)

export default function initArray(vm: Vm) {
  const wrappedMethods = createWrappedMethods(vm)
  for (let method of methods) {
    Array.prototype[method] = function methods(...args: any[]) {
      for (let arg of args) {
        if (
          Object.prototype.toString.call(arg) === '[object GeneratorFunction]'
        ) {
          return wrappedMethods[method].apply(this, args as [any, any])
        }
      }
      return originMethods[method].apply(this, args)
    }
  }
  // @ts-ignore
  Array.prototype.vm = vm
}
