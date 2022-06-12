import { useState, useEffect, useRef } from 'react'

/**
 * @description 用于固定非固定高度 Css 的 dom 的高度，例如 height : 100%
 */
export default function useFixHeight<T extends HTMLElement>(
  defaultHeight = '100%'
) {
  const domRef = useRef<T>(null)
  const [H, setH] = useState(0)
  useEffect(() => {
    if (domRef.current) {
      setH(domRef.current.scrollHeight)
    }
  }, [domRef.current])
  const heightStr = H > 0 ? H + 'px' : defaultHeight
  return {
    height: H,
    heightStr,
    domRef
  }
}
