import { NodePath, Visitor } from "@babel/core";
import * as t from "@babel/types";
import { UNI_PREFIX } from "~/config";

/* yield 暂停的粒度为以下表达式 */
export const needYieldExpression: (
  | string
  | ((path: NodePath<t.Node>) => boolean)
)[] = [
  "UnaryExpression", // 一元运算符 如 !a
  "BinaryExpression", // 二元运算符 如 a+b
  "LogicalExpression", // 逻辑运算符 如 a || b
  "ConditionalExpression", // 条件运算符 a ? b : c
  "AssignmentExpression", // 赋值运算符 如 = +=
  "ArrayExpression", // 数组定义
  "ObjectExpression", // 对象定义
  "SequenceExpression", // (a,b,c) 显示括号
  (path) =>
    path.type === "UpdateExpression" && (path.node as t.UpdateExpression).prefix // 前缀时 ++i 属于普通情况

  // 'UpdateExpression' ++ 或者 -- 有特殊情况 在下方处理
];

export const judgeNeedYield = (path: NodePath<t.Node>) =>
  needYieldExpression.some((p) =>
    typeof p === "function" ? p(path) : path.type === p
  );

export const createLocArray = (loc?: t.SourceLocation | null) => {
  return loc
    ? [
        t.numericLiteral(loc.start.line),
        t.numericLiteral(loc.start.column),
        t.numericLiteral(loc.end.line),
        t.numericLiteral(loc.end.column)
      ]
    : [
        t.numericLiteral(-1),
        t.numericLiteral(-1),
        t.numericLiteral(-1),
        t.numericLiteral(-1)
      ];
};

export const createLoc = (...loc: number[]) => {
  if (loc.length === 1) loc = new Array(4).fill(loc[0]);
  return {
    start: { line: loc[0], column: loc[1] },
    end: { line: loc[2], column: loc[3] }
  };
};

export const createYieldExpressionWithMap = (
  node: t.Expression,
  loc: t.SourceLocation | null = node.loc
) => {
  return t.yieldExpression(t.arrayExpression([node, ...createLocArray(loc)]));
};

/* 将某些表达式前添加 yield */
export const insertYieldBeforeExpression: Visitor = {
  Function(path, parentPath) {
    if (path !== parentPath) path.skip();
  },
  VariableDeclarator: {
    exit(path) {
      // TODO: 声明不存在情况下，如果是let 或者 const 声明，则不需要兼容
      /* 声明可能不存在 */
      path.node.init = createYieldExpressionWithMap(
        path.node.init ?? t.identifier("undefined"),
        path.node.loc
      );
    }
  },
  ReturnStatement: {
    exit(path) {
      const loc = path.node.loc;
      path.node.argument = t.arrayExpression([
        path.node.argument ?? t.unaryExpression("void", t.numericLiteral(0)),
        ...createLocArray(loc)
      ]);
    }
  },
  DebuggerStatement: {
    exit(path) {
      path.replaceWith(
        createYieldExpressionWithMap(
          t.stringLiteral(UNI_PREFIX + "debugger"),
          path.node.loc
        )
      );
    }
  },
  Expression: {
    exit(path, parentPath) {
      const funPath = path.getFunctionParent()!;
      const node = funPath.node;
      if (
        path.node.extra?.noNeedYield ||
        !path.node.loc ||
        node.generator !== true ||
        funPath !== parentPath
      )
        return;
      if (judgeNeedYield(path)) {
        path.replaceWith(createYieldExpressionWithMap(path.node));
        path.skip();
      } else if (path.type === "UpdateExpression") {
        /*
              后缀时 i++ 属于特殊情况
              直接加上 yield 会导致优先级不同 如 1 + i++ 会变成 1 + (yield i++) 导致计算错误且暂停错误
              所以使用临时变量将 1 + i++ 转换为 (temp = 1 + i++,yield temp) 
             */
        const parentPath = path.parentPath;
        if (!parentPath.node.loc) return;
        if (
          parentPath.isExpression() &&
          parentPath &&
          judgeNeedYield(parentPath)
        ) {
          parentPath.replaceWith(
            t.sequenceExpression([
              t.assignmentExpression(
                "=",
                t.identifier(UNI_PREFIX + "temp"),
                parentPath.node
              ),
              createYieldExpressionWithMap(
                t.identifier(UNI_PREFIX + "temp"),
                parentPath.node.loc
              )
            ])
          );
          parentPath.skip();
        } else {
          /* @ts-ignore (temp = 1 + i++,yield temp) */
          parentPath.node[path.key] = t.sequenceExpression([
            t.assignmentExpression(
              "=",
              t.identifier(UNI_PREFIX + "temp"),
              path.node
            ),
            createYieldExpressionWithMap(
              t.identifier(UNI_PREFIX + "temp"),
              parentPath.node.loc
            )
          ]);
        }
      }
    }
  }
};
