import { useEffect, useRef } from 'react'

import { useMonaco } from '@monaco-editor/react'

import { useVm } from '~/routes/practice/$questionId/Problem/Editor/Monaco/hooks'
import { useEditorState } from '~/states'

/* editor 可添加断点 */
export default function useBreakPonit() {
  const monaco = useMonaco()!
  const [editor] = useEditorState()
  const { vm } = useVm()

  /* 若传入新的 vm 需要继承旧 breakPointLines */
  const lastVm = useRef(vm)
  useEffect(() => {
    vm.breakPointLines = lastVm.current.breakPointLines
    lastVm.current = vm
  }, [vm])

  const addBreakPoint = (line: number) => {
    if (!editor) return
    let model = editor.getModel()
    if (!model) return
    let value = {
      range: new monaco.Range(line, 1, line, 1),
      options: { linesDecorationsClassName: 'breakpoints' }
    }
    vm.breakPointLines.push(line)
    model.deltaDecorations([], [value])
  }
  /* 删除断点，如果指定了line，删除指定行的断点，否则删除当前model里面的所有断点 */
  const removeBreakPoint = (line: number) => {
    if (!editor) return
    let model = editor.getModel()
    if (!model) return
    let ids = []
    let decorations = editor.getLineDecorations(line)
    if (decorations) {
      for (let decoration of decorations) {
        if (decoration.options.linesDecorationsClassName === 'breakpoints') {
          ids.push(decoration.id)
        }
      }
    }
    if (ids && ids.length) {
      model.deltaDecorations(ids, [])
    }
    const lineIndex = vm.breakPointLines.indexOf(line)
    if (lineIndex > -1) {
      vm.breakPointLines.splice(lineIndex, 1)
    }
  }

  /* 判断该行是否存在断点 */
  const hasBreakPoint = (line: number) => {
    if (!editor) return
    let decorations = editor.getLineDecorations(line)
    if (decorations) {
      for (let decoration of decorations) {
        if (decoration.options.linesDecorationsClassName === 'breakpoints') {
          return true
        }
      }
    }
    return false
  }
  editor?.setScrollPosition
  useEffect(() => {
    if (editor) {
      editor.onDidChangeModelContent(e => {
        //必须在nextTick处理，不然getPosition返回的位置有问题
        setTimeout(() => {
          //获取当前的鼠标位置
          let pos = editor.getPosition()
          if (pos) {
            //获取当前的行
            let line = pos.lineNumber
            //如果当前行存在断点，删除多余的断点只保留一个
            if (hasBreakPoint(line)) {
              removeBreakPoint(line)
              addBreakPoint(line)
            }
          }
        }, 0)
      })

      editor.onMouseDown(e => {
        //这里限制了一下点击的位置，只有点击breakpoint应该出现的位置，才会创建，其他位置没反应
        const width = document.querySelector('.line-numbers')?.clientHeight
        if (
          width &&
          e.target.detail &&
          e.target.detail.offsetX &&
          e.target.detail.offsetX >= 0 &&
          e.target.detail.offsetX <= width
        ) {
          let line = e.target.position!.lineNumber
          //如果点击的位置没有的话创建breakpoint，有的话，删除
          if (!hasBreakPoint(line)) {
            addBreakPoint(line)
          } else {
            removeBreakPoint(line)
          }
        }
      })
    }
  }, [editor])
}
