import { PluginObj } from "@babel/core";
import * as t from '@babel/types';
import generator from "@babel/generator";
import { createYieldExpressionWithMap } from "./insertYieldBeforeExpression";
import { UNI_PREFIX } from "~/config.js";

/* 处理函数调用 */
export const handleCallExpression: PluginObj = {
  visitor: {
    CallExpression: {
      exit(path) {
        /*
          Convert console.log(a)
          To yield vm.pushFrame(console.log(a),'console.log')
         */
        // 跳过原来是箭头函数的普通函数的 bind 调用
        if (
          path.node.extra?.noNeedYield ||
          !path.node.loc ||
          path.getFunctionParent()?.node.generator !== true
        ) {
          return;
        }

        /* 调用者名 */
        const calleeString = generator(path.node.callee).code;

        /* vm.pushFrame(console.log(a),'console.log') */
        const vmCall = t.memberExpression(
          t.identifier(`${UNI_PREFIX}vm`),
          t.identifier("pushFrame")
        );

        path.replaceWith(
          createYieldExpressionWithMap(
            t.callExpression(vmCall, [
              path.node,
              t.stringLiteral(calleeString),
            ]),
            path.node.loc
          )
        );
        path.skip();
      },
    },
  },
};
