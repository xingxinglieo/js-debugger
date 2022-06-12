import type { PluginObj } from '@babel/core'
// import babel from '@babel/core'
import * as t from '@babel/types'
import { CollectClosureState, collectClosure } from './collcetClosure'
import { UNI_PREFIX } from '~/config'

import template from '@babel/template';
// const { template } = babel
/* 处理函数作用域变量与闭包变量 */
export const injectInitFunctionVariable: PluginObj = {
  visitor: {
    Function: {
      exit(path) {
        const { node } = path
        if (
          path.type === 'ArrowFunctionExpression' ||
          (['ClassMethod', 'ObjectMethod'].includes(node.type) &&
            // @ts-ignore
            node.kind !== 'method') ||
          !path.node.generator
        )
          return
        /*  
          处理闭包
          collectClosureState 维护一个当前块级作用域 
          用于判断 indentifier 是否属于闭包 
         */
        const collectClosureState = new CollectClosureState(path)
        path.traverse(collectClosure, collectClosureState)
        const closuresBindingName = [...collectClosureState.closures]

        /* 处理函数作用域变量 即非 `let` `const` 的 bindings  */
        const bindings = path.scope.bindings
        const varBindingsName = Object.keys(bindings).filter(
          key => !['let', 'const'].includes(bindings[key].kind)
        )
        /* 
          vm.initVariable({ 
            local: () => (a, b, c), 
            closure: () => (d, e, f), 
            this
          });
         */

        const injectInit = <t.Statement>template.ast(`
      ${UNI_PREFIX}vm.initVariable({ 
        getLocal: () => ({ ${varBindingsName.join(',')} }), 
        getClosure: { ${closuresBindingName
          .map(binding => `${binding}: () => ${binding}`)
          .join(',')} }, 
        ${UNI_PREFIX}this: this
        });
        `)
        // @ts-ignore
        injectInit.expression.extra = { noNeedYield: true }
        ;(node.body as t.BlockStatement).body.unshift(injectInit)
      }
    }
  }
}
/*  ${
  ''
  //@ts-ignore
  // path.isOriginArrow ? UNI_PREFIX :
}*/
