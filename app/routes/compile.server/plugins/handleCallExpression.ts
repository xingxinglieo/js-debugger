import { PluginObj } from '@babel/core'
import t from '@babel/types'
import generator from '@babel/generator'
import { createYieldExpressionWithMap } from './insertYieldBeforeExpression'
import { UNI_PREFIX } from '~/config.js'

// @ts-ignore
// const generator: typeof _generator = _generator.default
/* 处理函数调用 */
export const handleCallExpression: PluginObj = {
  visitor: {
    CallExpression: {
      exit(path) {
        /*
          Convert console.log(a)
          To yield vm.pushFrame('console.log', console.log(a))
         */
        // 跳过原来是箭头函数的普通函数的 bind 调用
        if (
          path.node.extra?.noNeedYield ||
          !path.node.loc ||
          path.getFunctionParent()?.node.generator !== true
        ) {
          return
        }

        /* 调用者名 */
        const calleeString = generator(path.node.callee).code

        /* vm.pushFrame('console.log', console.log(a)) */
        const vmCall = t.memberExpression(
          t.identifier(`${UNI_PREFIX}vm`),
          t.identifier('pushFrame')
        )

        path.replaceWith(
          createYieldExpressionWithMap(
            t.callExpression(vmCall, [
              t.callExpression(path.node.callee, path.node.arguments),
              t.stringLiteral(calleeString)
            ]),
            path.node.loc
          )
        )
        path.skip()
      }
    }
  }
}
