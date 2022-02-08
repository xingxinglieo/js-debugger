import { Visitor, NodePath } from '@babel/core'
import t from '@babel/types'
import { Scope } from '@babel/traverse'
import { getScope } from './addBlockToForSwitchStatement'
import { UNI_PREFIX, ALLOW_GLOBAL } from '~/config'
/* 用于收集闭包 */
export class CollectClosureState {
  closures: Set<string> = new Set()
  path: NodePath<t.Function>
  scopes: Scope[] = [] // 维护当前函数的块级作用域栈
  constructor(path: NodePath<t.Function>) {
    this.path = path
  }
  /* 用于判断在当前函数作用域是否有此 indentifier */
  findClosure(indentifier: string) {
    if (this.closures.has(indentifier)) return
    for (let scope of this.scopes) {
      if (scope.hasOwnBinding(indentifier)) return
    }
    this.closures.add(indentifier)
  }
  pushScope(scope: Scope) {
    this.scopes.unshift(scope) // 因为从前往后遍历
  }
  popScope() {
    this.scopes.shift()
  }
}
/* 配合 CollectClosureState 对一个函数推入有关 closure 的 vm 代码 */
export const collectClosure: Visitor<CollectClosureState> = {
  Function: {
    enter(path, state) {
      if (path !== state.path) path.skip()
      state.pushScope(path.scope)
    }
  },
  BlockStatement: {
    enter(path, state) {
      state.pushScope(getScope(path))
    },
    exit(_path, state) {
      state.popScope()
    }
  },
  Identifier(path, state) {
    const name = path.node.name
    /* 
      排除情况: 
        运行时标识  
        全局对象
        变量声明  
        对象引用(对象只需要处理被引用的第一个) 
        函数的参数(参数在判断时还未进入块级作用域 )
        super()
     */
    if (
      name.indexOf(UNI_PREFIX) > -1 ||
      ALLOW_GLOBAL.indexOf(name) > -1 ||
      path.parentPath.isDeclaration() ||
      path.parentPath.isProperty() ||
      path.parentPath.isClassMethod() ||
      path.key === 'property' ||
      name === 'super' ||
      name === 'undefined' ||
      path.scope.bindings[name]
    )
      return
    state.findClosure(name)
  }
}
