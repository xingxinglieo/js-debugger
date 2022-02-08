import { useEffect } from 'react'

import { useVm } from '../../hooks'
import useStackIndex from './useStackIndex'
// import * as Tooltip from '@radix-ui/react-tooltip'

export default function Stack() {
  const { stack } = useVm()
  const [stackIndex, setStackIndex] = useStackIndex()
  useEffect(() => {
    setStackIndex(stack.length - 1)
  }, [stack.length])
  return (
    <div className='flex flex-col-reverse px-1.5 items-center'>
      {stack.map((frame, index) => {
        return (
          <div
            className='flex flex-col items-center'
            key={frame.callee + index}
          >
            {index !== stack.length - 1 ? (
              <div
                className='bg-purple-400 flex justify-center'
                style={{
                  width: '2px',
                  height: '15px'
                }}
              ></div>
            ) : null}
            <button
              onClick={() => setStackIndex(index)} // 反转需要正
              className={
                'text-xs line-ellipsis ' +
                (index === stackIndex ? 'button-main' : 'button-side')
              }
              style={{
                maxWidth: '100px'
              }}
            >
              {frame.callee}
            </button>
          </div>
        )
      })}
    </div>
  )
}
