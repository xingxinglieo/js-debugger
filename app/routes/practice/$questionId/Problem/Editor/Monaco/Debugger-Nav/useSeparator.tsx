import { useEffect, useMemo, useState, useRef } from 'react'
import { ChevronUpIcon } from '@heroicons/react/outline'
import { isClient } from '~/utils/whichEvn'
import { atom, useRecoilState } from 'recoil'
import { useEditorState } from '~/states'

export const navHeightState = atom({
  key: 'navHeightState',
  default: 0
})
export function  useNavHeightState(){
  return useRecoilState(navHeightState)
}

const bodyHeight = isClient ? document.body.clientHeight : 0

export default function useSeparator(navH: number) {
  const [isDrag, setIsDrag] = useState(false) // mousedown 时设置拖拽标志 mouseup 取消

  useEffect(() => {
    const mouseUpEvent = () => setIsDrag(false) // mouseup 取消,事件在 ducument 上
    document.addEventListener('mouseup', mouseUpEvent)
    return () => document.removeEventListener('mouseup', mouseUpEvent)
  }, [])

  const [Y, setY] = useState(0) // 光标距离视口底部的 Y 轴
  const [H, setH] = useNavHeightState() // navBar 内容区高度
  const [editor] = useEditorState()
  // useState(0)

  const isHidden = useMemo(() => H === 0, [H])

  const domRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (isDrag) {
      /* 拖拽时，监听 document mousemove 事件，取消拖拽时取消监听 */
      const mouseMoveEvent: (e: MouseEvent) => void = e =>
        setY(bodyHeight - e.clientY)
      document.addEventListener('mousemove', mouseMoveEvent)
      return () => document.removeEventListener('mousemove', mouseMoveEvent)
    }
  }, [isDrag])

  const editorHeight = editor?.getDomNode()?.getBoundingClientRect().height
  useEffect(() => {
    /* 
      三种情况：
        1、初始状态或者 Y 小于 navH H 为 0
        2、拖拽距离在 navH 到 100 + navH 间，H 直接拓展到 100，若再往上拓展，有一段距离无反馈
        3、大于 100 + navH 时，通过 Y - navH 算 H，最高不超过 350
    */
    setH(H => {
      if (editorHeight) {
        if (Y <= navH) {
          return 0
        } else if (Y < 100 + navH) {
          return 100
        } else {
          // 最高占 80% 高度
          return Math.min(editorHeight * 0.8, Y - navH)
        }
      }
      return 0
    })
  }, [Y, navH, editorHeight])
  const show = (height = 100) =>
    setH(Math.max(Math.min(height, (editorHeight || 0) * 0.8), 0))
  return {
    Y,
    H,
    show,
    isHidden,
    Separator: () => (
      <div
        ref={domRef}
        onMouseDown={() => setIsDrag(true)}
        className=' bg-white  relative select-none cursor-row-resize'
        style={{ height: '4px' }}
      >
        <button
          onMouseUp={() => setH(isHidden ? 100 : 0)}
          className='center rounded-full w-6 h-6 text-gray-600 bg-white shadow-lg cursor-pointer'
        >
          <div className='center'>
            <ChevronUpIcon
              className='h-4 w-4'
              style={{
                transform: !isHidden ? 'rotate(180deg)' : ''
              }}
            />
          </div>
        </button>
      </div>
    )
  }
}
