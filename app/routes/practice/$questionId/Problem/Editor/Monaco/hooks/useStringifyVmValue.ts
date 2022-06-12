import { useEffect, useState } from 'react'
import { Vm } from '../runtime/Vm'

/* 格式化表达式值 */
export default function useStringifyVmValue(props: { vm: Vm }) {
  const { vm } = props
  const [current, setCurrent] = useState<string>('undefined')
  const [exports, setExports] = useState<string>(
    JSON.stringify(vm.module.exports)
  )
  useEffect(() => {
    try {
      var e = JSON.stringify(vm.module.exports)
      var v = JSON.stringify(vm.lastState.value)
    } catch {
      e = '[Circular]'
      v = '[Circular]'
    }
    if (vm.done) setExports(e)
    else {
      setCurrent(v)
    }
  }, [vm.done, vm.lastState])

  return { current, exports }
}
