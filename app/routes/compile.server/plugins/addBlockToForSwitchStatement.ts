/* 用于处理 for 循环会有两个作用域和 Swtich 块级作用域不能插入语句的问题 */
import babel, { PluginObj, NodePath } from '@babel/core'
import t from '@babel/types'

/* 属于 for 的语句 */
export const forKeyword = ['ForStatement', 'ForInStatement', 'ForOfStatement']

/* 配合下面的编译，给其他插件获取正确的 scope */
export const getScope = (path: babel.NodePath<babel.types.BlockStatement>) => {
  if (forKeyword.includes(path.parentPath.type)) {
    return path.parentPath.scope
  } else if (
    /* 编译后的 Switch 语句 */
    path.node.type === 'BlockStatement' &&
    path.node.body?.[0]?.type === 'SwitchStatement'
  ) {
    return (path.get('body.0') as typeof path).scope
  }
  return path.scope
}

export const addBlockToForSwitchStatement: PluginObj = {
  visitor: {

    /* for 语句处理方式：向内包一层块级作用域 */
    [forKeyword.join('|')](path: NodePath<t.ForStatement>) {
      path.node.body = t.blockStatement([path.node.body])
    },
    /* swtich 语句处理方式：向外包一层块级作用域后替换 */
    SwitchStatement(path) {
      if (!path.node.loc) return
      const preloc = path.node.loc
      path.node.loc = null
      path.replaceWith(t.blockStatement([path.node]))
      path.node.loc = preloc
    }
  }
}
