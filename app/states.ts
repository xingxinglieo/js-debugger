import { editor } from 'monaco-editor'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'

import { Vm } from '~/routes/practice/$questionId/Problem/Editor/Monaco/runtime/Vm'
import type { LoaderDataType as QuestionLoaderDataType } from '~/routes/practice/$questionId'

const vmState = atom({
  key: 'vmState',
  default: Vm.getInstance(''),
  dangerouslyAllowMutability: true
})
const useVmState = () => useRecoilState(vmState)

const editorState = atom<editor.IStandaloneCodeEditor | null>({
  key: 'editorState',
  default: null,
  dangerouslyAllowMutability: true
})
const useEditorState = () => useRecoilState(editorState)

const codeState = atom<string>({
  key: 'codeState',
  default: ''
})
const useCodeState = () => useRecoilState(codeState)

type QuetionIdDataType = NonNullable<QuestionLoaderDataType['data']>
type QuetionDataType = QuetionIdDataType['question']
const questionState = atom<QuetionDataType>({
  key: 'questionState',
  default: {
    id: -1,
    count: -1,
    problemId: -1,
    createTime: new Date(),
    categories: [],
    samples: [],
    title: '',
    content: '',
    difficulty: 1
  }
})
const useQuestionState = () => useRecoilState(questionState)

// const questionCountState = selector({
//   key: 'questionCountState',
//   get: ({ get }) => {
//     const question = get(questionState)
//     return question.count
//   }
// })
// const useQuestionCountState = () => useRecoilValue(questionCountState)

type ProblemDataType = QuetionIdDataType['problem']
const problemState = atom<ProblemDataType>({
  key: 'problemState',
  default: {
    test: null,
    answer: null,
    id: 1,
    createTime: new Date(),
    questionId: 1,
    template: '',
    callee: '',
    answerInjectId: 1,
    testInjectId: 1,
    cases: [],
    injects: []
  }
})
const useProblemState = () => useRecoilState(problemState)

export {
  vmState,
  editorState,
  codeState,
  useVmState,
  useEditorState,
  useCodeState,
  useQuestionState,
  // useQuestionCountState,
  useProblemState,
  atom,
  useRecoilState
}
