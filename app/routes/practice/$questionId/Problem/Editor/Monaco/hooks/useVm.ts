import { useEffect } from 'react'
import useStringifyVmValue from './useStringifyVmValue'
import useCompile from './useCompile'
import { useNotification } from '@vechaiui/react'

import { useVmState, useEditorState, useRecoilState, atom } from '~/states'

const locState = atom({
  key: 'locState',
  default: [-1, -1, -1, -1]
})
const errorState = atom<null | any>({
  key: 'errorState',
  default: null
})

const vmNewFlagState = atom({
  key: 'vmNewFlagState',
  default: true
})
export default function useVm() {
  const [editor] = useEditorState()

  const [loc, setLoc] = useRecoilState(locState)
  const [error, setError] = useRecoilState(errorState)
  const [newFlag, setNewFlag] = useRecoilState(vmNewFlagState)

  const notification = useNotification()

  const [vm, setVm] = useVmState()
  useEffect(() => {
    vm.setErrorCallbak(setError)
    vm.warnCallback = (e: string) =>
      notification({
        title: e,
        position: 'top',
        status: 'warning',
        duration: 2000,
        closeable: false
      })
  }, [vm])

  const { translatedCode, compile } = useCompile(
    code => {
      notification({
        title: '编译成功',
        position: 'top',
        status: 'success',
        duration: 2000,
        closeable: false
      })
      reset(code)
    },
    e => vm.throwError(e)
  )

  const { exports, current } = useStringifyVmValue({ vm })

  const setAll = () => {
    setLoc(vm.lastFrame.loc)
  }

  const reset = (translatedCode: string) => {
    vm.reset(translatedCode)
    setAll()
    setError(null)
    setNewFlag(true)
    editor?.setScrollTop(0)
  }

  useEffect(() => {
    if (vm.done && editor) editor.setScrollTop(0)
  }, [editor, vm.done])

  const excute = () => {
    vm.excute()
    setNewFlag(false)
    setAll()
  }

  const step = () => {
    vm.step()
    setNewFlag(false)
    setAll()
  }

  const { stack, lastFrame } = vm

  return {
    vm,
    setVm,

    compile,
    excute,
    step,
    reset,

    newFlag,
    translatedCode,
    stack,
    lastFrame,
    loc,
    error,
    current,
    exports
  } as const
}
