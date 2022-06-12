import { PluginObj } from "@babel/core";
import { UNI_PREFIX } from "~/config.js";
import {
  insertYieldBeforeExpression,
  createLoc
} from "./insertYieldBeforeExpression.js";
import template from "@babel/template";
import * as t from "@babel/types";
export const commonFunctionToGenerator: PluginObj = {
  visitor: {
    /* 包一层 global 执行代码 */
    Program(path) {
      if (!path.node.loc) return;
      const returnNode = t.returnStatement();
      returnNode.loc = createLoc(-1);
      const funNode = t.functionDeclaration(
        t.identifier("global"),
        [],
        t.blockStatement([...path.node.body, returnNode])
      );
      funNode.loc = path.node.loc;
      path.replaceWith(
        t.program([
          funNode,
          template.statement(`${UNI_PREFIX}vm.pushFrame(global(),'global')`)()
        ])
      );
      path.node.loc = null;
    },

    Function: {
      /* 普通函数 转为 generator */
      enter(path) {
        const { node } = path;
        /* 排除情况: 
        箭头函数(后续会转为普通函数再次处理)
          类方法且普通方法(contructor get set)
          函数本身就是 generator 函数
         */
        if (
          path.type === "ArrowFunctionExpression" ||
          (["ClassMethod", "ObjectMethod"].includes(node.type) &&
            // @ts-ignore
            node.kind !== "method") ||
          node.generator
        )
          return;
        node.generator = true;

        /* 表达式前添加 yield */
        path.traverse(insertYieldBeforeExpression, path);
      }
    }
  }
};
