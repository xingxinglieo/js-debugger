import { useMonaco } from '@monaco-editor/react'
import { useEffect, useRef } from 'react'

import useVm from './useVm'
import { useEditorState } from '~/states'
import { useNavHeightState } from '../Debugger-Nav/useSeparator'

/* 断点时的高亮 */
export default function useDecoration() {
  const monaco = useMonaco()
  const decorationRef = useRef<string | null>(null)

  const [editor] = useEditorState()
  const [navHeight] = useNavHeightState()
  const { loc } = useVm()

  useEffect(() => {
    if (editor && monaco) {
      const r = new monaco.Range(loc[0], loc[1] + 1, loc[2], loc[3] + 1)

      if (decorationRef.current !== null) {
        /* 非首次添加高亮时，用返回 id 直接移动上一次高亮位置 */
        editor.deltaDecorations(
          [decorationRef.current],
          [{ range: r, options: { inlineClassName: 'debugger-range' } }]
        )
      } else {
        /* 首次添加高亮时，记录返回的 id */
        decorationRef.current = editor.deltaDecorations(
          [],
          [{ range: r, options: { inlineClassName: 'debugger-range' } }]
        )[0]
      }
      /* loc[0] <= 0 代表是编译出来的代码 不需要处理 */
      if (loc[0] > 0) {
        /* 高亮时，编辑器视口移到准确的代码位置 */
        const lineHeight = document.querySelector('.line-numbers')?.clientHeight
        let height = editor.getDomNode()?.getBoundingClientRect().height
        if (lineHeight && height) {
          /* 需要减去下方调试区高度 为剩余视口高 */
          height = height - navHeight 
          const scrollTop = editor.getScrollTop()
          const breakPonitScrollTop = (loc[0] - 1) * lineHeight
          /* 判断条件是 在视口的上半区间 */
          if (
            breakPonitScrollTop >= scrollTop &&
            breakPonitScrollTop <= scrollTop + height / 2
          ) {
            return
          } else {
            /* 否则代码定位到视口4分之一处 */
            editor.setScrollTop(breakPonitScrollTop - height / 4)
          }
        }
      }
    }
  }, [loc, editor, navHeight, monaco])
}
