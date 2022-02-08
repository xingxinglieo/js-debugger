import { useEffect } from 'react'
import useSeparator from './useSeparator'
import useFixHeight from '~/hooks/useFixHeight'
import Nav from './Nav'
import ShowError from './ShowError'

import useVm from '../hooks/useVm'
import Debugger from './Debugger'
export default function DebuggerNav() {
  const { height: placeholderH, domRef } = useFixHeight<HTMLDivElement>()
  const { Separator, H, show, isHidden } = useSeparator(placeholderH)
  const { error } = useVm()
  useEffect(() => {
    if (error !== null && isHidden) show()
  }, [error])

  return (
    <>
      <div
        ref={domRef}
        className='bg-white w-full'
        style={
          placeholderH
            ? {
                position: 'absolute',
                bottom: '0'
              }
            : {}
        }
      >
        <Separator />
        <Nav />
        <div style={{ height: H + 'px' }} className='overflow-y-auto px-4'>
          <ShowError />
          <Debugger />
        </div>
      </div>
      {/* placeholderH 在挂载后会设置与 Separator + Nav 高度相同，同时，整个组件会设置为 absolute  */}
      <div style={{ height: placeholderH + 'px', width: '0px' }}></div>
    </>
  )
}
