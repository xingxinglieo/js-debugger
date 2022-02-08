import { Vm } from './Vm'
export type ValueWithLoc<T = any> = [T, number, number, number, number]

export type CallBack<T = any> = (
  ...args: any[]
) => Generator<any, ValueWithLoc, any>

export const uselessLoc: [number, number, number, number] = [-1, -1, -1, -1]

const _replace = String.prototype.replace
const _replaceAll = String.prototype.replaceAll
const createWrappedMethods = (vm: Vm) => {
  return {
    *replace(
      this: string,
      ...args: Parameters<String['replace']>
    ): Generator<any, ValueWithLoc<string>, any> {
      const replacer = args[1] as unknown as (
        ...a: Parameters<typeof args[1]>
      ) => Generator<any, ValueWithLoc<string>, any>

      const argsCollector: [string, ...any[]][] = []
      _replace.call(this, args[0], (...p) => {
        argsCollector.push(p)
        return ''
      })
      const result: string[] = []
      for (let a of argsCollector) {
        result.push(
          yield [vm.pushFrame(replacer(...a), 'replace'), ...uselessLoc]
        )
      }
      return [
        _replace.call(this, args[0], () => result.shift()!),
        ...uselessLoc
      ]
    },
    *replaceAll(
      this: string,
      ...args: Parameters<String['replaceAll']>
    ): Generator<any, ValueWithLoc<string>, any> {
      const replacer = args[1] as unknown as (
        ...a: Parameters<typeof args[1]>
      ) => Generator<any, ValueWithLoc<string>, any>

      const argsCollector: [string, ...any[]][] = []
      _replaceAll.call(this, args[0], (...p) => {
        argsCollector.push(p)
        return ''
      })
      const result: string[] = []
      for (let a of argsCollector) {
        result.push(
          yield [vm.pushFrame(replacer(...a), 'replaceAll'), ...uselessLoc]
        )
      }
      return [
        _replaceAll.call(this, args[0], () => result.shift()!),
        ...uselessLoc
      ]
    }
  }
}

const methods = Object.keys(
  createWrappedMethods({} as any)
) as (keyof ReturnType<typeof createWrappedMethods>)[]
const originMethods = methods.reduce((obj, key: typeof methods[0]) => {
  obj[key] = String.prototype[key]
  return obj
}, {} as ExtendsionObject)

export default function initString(vm: Vm) {
  const wrappedMethods = createWrappedMethods(vm)
  for (let method of methods) {
    // @ts-ignore
    String.prototype[method] = function methods(...args: any[]) {
      for (let arg of args) {
        if (
          Object.prototype.toString.call(arg) === '[object GeneratorFunction]'
        ) {
          // @ts-ignore
          return wrappedMethods[method].apply(this, args as [any, any])
        }
      }
      return originMethods[method].apply(this, args)
    }
  }
  // @ts-ignore
  String.prototype.vm = vm
}
