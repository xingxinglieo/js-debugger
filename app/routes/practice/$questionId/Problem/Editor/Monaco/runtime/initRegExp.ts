// import { Vm } from '~/routes/runtime/Vm'
// export type ValueWithLoc<T = any> = [T, number, number, number, number]

// export type CallBack<T = any> = (
//   ...args: any[]
// ) => Generator<any, ValueWithLoc, any>

// export const uselessLoc: [number, number, number, number] = [-1, -1, -1, -1]

// const _replace = RegExp.prototype[Symbol.replace]

// const createWrappedMethods = (vm: Vm) => {
//   return {
//     *replace(
//       this: RegExp,
//       ...args: Parameters<typeof _replace>
//     ): Generator<any, ValueWithLoc<string>, any> {
//       const replacer = args[1] as unknown as (
//         ...a: Parameters<typeof args[1]>
//       ) => Generator<any, ValueWithLoc<string>, any>

//       const argsCollector: [string, ...any[]][] = []
//       _replace.call(this, args[0], (...p) => {
//         argsCollector.push(p)
//         return ''
//       })
//       const result: string[] = []
//       for (let a of argsCollector) {
//         result.push(
//           yield [vm.pushFrame(replacer(...a), 'replace'), ...uselessLoc]
//         )
//       }
//       return [
//         _replace.call(this, args[0], () => result.shift()!),
//         ...uselessLoc
//       ]
//     }
//   }
// }

// export default function initString(vm: Vm) {
//   const wrappedMethods = createWrappedMethods(vm)
//   // @ts-ignore
//   RegExp.prototype[Symbol.replace] = function methods(...args: any[]) {
//     for (let arg of args) {
//       if (
//         Object.prototype.toString.call(arg) === '[object GeneratorFunction]'
//       ) {
//         // @ts-ignore
//         return wrappedMethods.replace.apply(this, args as [any, any])
//       }
//     }
//     return _replace.apply(this, args as [any, any])
//   }
//   // @ts-ignore
//   RegExp.prototype.vm = vm
// }
