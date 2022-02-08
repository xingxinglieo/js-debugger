import { useEffect } from 'react'
import Editor from '@monaco-editor/react'
import { useMonaco } from '@monaco-editor/react'

import useCode from './hooks/useCode'
import { useBreakPonit, useDecoration } from './hooks'
import { useEditorState } from '~/states'

import DebuggerNav from './Debugger-Nav'

export default function Monaco() {
  const [code, setCode] = useCode()
  const monaco = useMonaco()
  useEffect(() => {
    monaco?.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
      noSyntaxValidation: false
    })
  }, [])

  const [_editor, setEditor] = useEditorState()

  /* 可添加断点 */
  useBreakPonit()

  /* 断点暂停时的高亮 */
  useDecoration()

  return (
    <div className='flex flex-col relative all-full'>
      <div className='flex-1 overflow-hidden'>
        <Editor
          height='100%'
          width='100%'
          language='javascript'
          onChange={value => setCode(value ?? '')}
          onMount={editor => setEditor(editor)}
          value={code}
          theme='vs-dark'
        />
      </div>
      <DebuggerNav />
    </div>
  )
}
