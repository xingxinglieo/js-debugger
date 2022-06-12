/* 解决 Clien Only 动态引入渲染   */
import loadable from '@loadable/component'
import _Drawer from 'rc-drawer'
import CSS from 'rc-drawer/assets/index.css'

// @ts-ignore
const Drawer: typeof _Drawer = loadable(
  () =>
    // @ts-ignore
    new Promise((r, c) =>
      // @ts-ignore .default bug
      import('rc-drawer').then(result => r(result.default), c)
    )
)
export { CSS }
export default Drawer
