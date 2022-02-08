import t from '@babel/types';
import type { PluginObj } from '@babel/core';

/* 
  将箭头函数转为普通函数 
  1 处理this
  2 处理无块返回值
 */
export const arrowFunctionToCommon: PluginObj = {
  visitor: {
    ArrowFunctionExpression(path) {
      const { node } = path;
      /* 
        处理无块的箭头函数 x=>x 转为 (function(x){ return x }).bind(this)
       */
      let returnNode: t.ReturnStatement;
      const block =
        node.body.type !== 'BlockStatement'
          ? t.blockStatement([
              ((returnNode = t.returnStatement(node.body)),
              (returnNode.loc = path.node.body.loc),
              returnNode),
            ])
          : node.body;
      /* (0, FUNCTION_EXPRESSION).bind(this)`*/
      const funNode = t.functionExpression(null, node.params, block);
    
      /* 因为 babel 会把括号去掉所以需要显式声明括号节点 防止语法错误 */ 
      const sequenceNode = t.sequenceExpression([funNode]);
      const bindNode = t.memberExpression(sequenceNode, t.identifier('bind'));
      const callNode = t.callExpression(bindNode, [t.thisExpression()]);

      funNode.loc = path.node.loc;
      sequenceNode.loc = null;
      bindNode.loc = null;
      callNode.loc = null;
      path.node.loc = null;

      path.replaceWith(callNode);
    },
  },
};
