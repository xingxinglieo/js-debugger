import { Vm } from '../Vm'
import { ValueWithLoc, CallBack, uselessLoc } from './index'

export default function createSortMethods(vm: Vm) {
  const sort: (
    this: any[],
    comparefn: CallBack
  ) => Generator<any, ValueWithLoc, any> = function* sort(comparefn) {
    const InnerArraySort: (
      array: any[],
      length: number,
      comparefn: CallBack
    ) => Generator<any, ValueWithLoc<undefined>, any> =
      function* InnerArraySort(array, length, comparefn) {
        function* insertSort(
          arr: any[],
          start = 0,
          end: number
        ): Generator<any, ValueWithLoc<undefined>, any> {
          end = end || arr.length

          for (let i = start; i < end; i++) {
            let e = arr[i]
            let j

            for (
              j = i;
              j > start &&
              (yield [vm.pushFrame(comparefn(arr[j - 1], e)), ...uselessLoc]) >
                0;
              j--
            )
              arr[j] = arr[j - 1]

            arr[j] = e
          }

          return [undefined, ...uselessLoc]
        }

        function* getThirdIndex(
          a: any,
          from: number,
          to: number
        ): Generator<any, ValueWithLoc<any[]>, any> {
          let tmpArr = [] // 递增量，200~215 之间，因为任何正数和15做与操作，不会超过15，当然是大于0的

          let increment = 200 + ((to - from) & 15)
          let j = 0
          from += 1
          to -= 1

          for (let i = from; i < to; i += increment) {
            tmpArr[j] = [i, a[i]]
            j++
          } // 把临时数组排序，取中间的值，确保哨兵的值接近平均位置

          // @ts-ignore
          tmpArr.sort(function* (a, b) {
            return [
              yield [vm.pushFrame(comparefn(a[1], b[1])), ...uselessLoc],
              ...uselessLoc
            ]
          })
          let thirdIndex = tmpArr[tmpArr.length >> 1][0]
          return [thirdIndex, ...uselessLoc]
        }

        function* _sort(
          a: any,
          b: any,
          c: any
        ): Generator<any, ValueWithLoc<any[]>, any> {
          let arr = []
          arr.push(a, b, c)
          yield [vm.pushFrame(insertSort(arr, 0, 3)), ...uselessLoc]
          return [arr, ...uselessLoc]
        }

        function* quickSort(
          a: any,
          from: number,
          to: number
        ): Generator<any, ValueWithLoc<undefined>, any> {
          //哨兵位置
          let thirdIndex = 0

          while (true) {
            if (to - from <= 10) {
              yield [vm.pushFrame(insertSort(a, from, to)), ...uselessLoc]
              return [undefined, ...uselessLoc]
            }

            if (to - from > 1000) {
              thirdIndex = yield [
                vm.pushFrame(getThirdIndex(a, from, to)),
                ...uselessLoc
              ]
            } else {
              // 小于1000 直接取中点
              thirdIndex = from + ((to - from) >> 2)
            }

            let tmpArr = yield [
              vm.pushFrame(_sort(a[from], a[thirdIndex], a[to - 1])),
              ...uselessLoc
            ]
            a[from] = tmpArr[0]
            a[thirdIndex] = tmpArr[1]
            a[to - 1] = tmpArr[2] // 现在正式把 thirdIndex 作为哨兵

            let pivot = a[thirdIndex]
            ;[a[from], a[thirdIndex]] = [a[thirdIndex], a[from]] // 正式进入快排

            let lowEnd = from + 1
            let highStart = to - 1
            a[thirdIndex] = a[lowEnd]
            a[lowEnd] = pivot // [lowEnd, i)的元素是和pivot相等的
            // [i, highStart) 的元素是需要处理的

            for (let i = lowEnd + 1; i < highStart; i++) {
              let element = a[i]
              let order = yield [
                vm.pushFrame(comparefn(element, pivot)),
                ...uselessLoc
              ]

              if (order < 0) {
                a[i] = a[lowEnd]
                a[lowEnd] = element
                lowEnd++
              } else if (order > 0) {
                do {
                  highStart--
                  if (highStart === i) break
                  order = yield [
                    vm.pushFrame(comparefn(a[highStart], pivot)),
                    ...uselessLoc
                  ]
                } while (order > 0) // 现在 a[highStart] <= pivot
                // a[i] > pivot
                // 两者交换

                a[i] = a[highStart]
                a[highStart] = element

                if (order < 0) {
                  // a[i] 和 a[lowEnd] 交换
                  element = a[i]
                  a[i] = a[lowEnd]
                  a[lowEnd] = element
                  lowEnd++
                }
              }
            } // 永远切分大区间

            if (lowEnd - from > to - highStart) {
              // 单独处理小区间
              yield [vm.pushFrame(quickSort(a, highStart, to)), ...uselessLoc] // 继续切分lowEnd ~ from 这个区间

              to = lowEnd
            } else if (lowEnd - from <= to - highStart) {
              yield [vm.pushFrame(quickSort(a, from, lowEnd)), ...uselessLoc]
              from = highStart
            }
          }
        }
        yield [vm.pushFrame(quickSort(array, 0, length)), ...uselessLoc]
        return [undefined, ...uselessLoc]
      }
    let array = Object(this)
    let length = array.length >>> 0
    yield [
      vm.pushFrame(InnerArraySort(array, length, comparefn)),
      ...uselessLoc
    ]
    return [this, ...uselessLoc]
  }
  return { sort }
}
