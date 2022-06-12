import { PluginObj } from '@babel/core'
import * as t from '@babel/types'
import { getScope } from './addBlockToForSwitchStatement'
import { UNI_PREFIX } from '~/config'
import template from '@babel/template';


/* 处理块级作用域变量 */
export const injectInitBlockVariable: PluginObj = {
  visitor: {
    BlockStatement: {
      exit(path) {
        if (
          (['ClassMethod', 'ObjectMethod'].includes(path.parent.type) &&
            // @ts-ignore
            path.parent.kind !== 'method') ||
          !path.getFunctionParent()!.node.generator
        )
          return
        const bindings = getScope(path).bindings
        /* let const 为块级作用域变量 */
        const letconstBindings = Object.keys(bindings).filter(key =>
          ['let', 'const'].includes(bindings[key].kind)
        )
        /* a: ()=> a,b: ()=> b */
        const pushGetBlocksList = letconstBindings
          .map(binding => `${binding}: () => ${binding}`)
          .join(',')
        /* 运行时代码，维护当前函数的块级作用域栈
            {
              vm.pushGetBlocks({ a: ()=> a , b: ()=> b })
              // ...othercode 
              vm.popGetBlocks()
            }
         */
        const blockCall = <t.Statement>(
          template.ast(
            `${UNI_PREFIX}vm.pushGetBlocks({ ${pushGetBlocksList} })`
          )
        )
        // @ts-ignore
        blockCall.expression.extra = { noNeedYield: true }
        path.node.body.unshift(blockCall)

        /* 如果是try catch，因为 try 如果出错会提前跳出，所以需要在 catch 前popGetblocks */
        if (path.parentPath.isCatchClause()) {
          path.node.body.unshift(
            <t.Statement>template.ast(`${UNI_PREFIX}vm.popGetBlocks()`)
          )
        }
        path.node.body.push(
          <t.Statement>template.ast(`${UNI_PREFIX}vm.popGetBlocks()`)
        )
      }
    },
    // @ts-ignore break/continue 会提前跳出块级，所以要在它们前面加上 popGetBlock 弹出块级栈
    ['BreakStatement|ContinueStatement']: {
      exit(path: babel.NodePath<t.BreakStatement | t.ContinueStatement>) {
        if (path.listKey) {
          // @ts-ignore
          const list = path.parentPath.node[path.listKey] as t.Statement[]
          if (list instanceof Array) {
            const index = list.indexOf(path.node)
            list.splice(
              index,
              1,
              <t.Statement>template.ast(`${UNI_PREFIX}vm.popGetBlocks()`),
              path.node
            )
          }
        }
      }
    }
  }
}
