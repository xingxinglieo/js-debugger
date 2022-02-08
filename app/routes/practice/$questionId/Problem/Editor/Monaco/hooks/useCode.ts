import { useEffect } from 'react'
import { useCodeState } from '~/states'
import { useLocalStorageState } from 'ahooks'
/* 此hook 目的是 loacalStorage code */
export default function useCode() {
  const [code, setCode] = useCodeState()
  const [localCode, setlocalCode] = useLocalStorageState('code', {
    defaultValue: ''
  })
  useEffect(() => {
    setCode(localCode)
    setlocalCode(localCode)
  }, [localCode])
  return [code, setlocalCode] as const
}
