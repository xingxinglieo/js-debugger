/* 解决 react-json-view Clien Only 动态引入渲染   */
import loadable from '@loadable/component'
import RJV from 'react-json-view'

const ReactJson: typeof RJV = loadable(
  () =>
    // @ts-ignore
    new Promise((r, c) =>
      // @ts-ignore .default bug
      import('react-json-view').then(result => r(result.default), c)
    )
)
export default ReactJson
