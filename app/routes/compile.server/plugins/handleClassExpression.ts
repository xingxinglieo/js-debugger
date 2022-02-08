import { PluginObj } from '@babel/core'
import t, { Expression, spreadElement } from '@babel/types'
import { COMMON_PREFIX, UNI_PREFIX } from '~/config'
import { createYieldExpressionWithMap } from './insertYieldBeforeExpression'
/* 处理 constructor 无法转换为 generator 的问题
  1、判断是否有继承
  2、判断是否有 contructor 方法，无则赋予默认
  3、收集 constructor 外定义的属性赋值语句
  4、在 contructor 的函数体上改造
    1、寻找 super()，若有，替换为 super.$_constructor() 和  constructor 外定义的属性赋值语句
    2、若无 super，前面插入 constructor 外定义的属性赋值语句
    3、插入 return this
  5、处理 new 表达式，全部转换为 vm.New 来创建对象，内部逻辑是根据是否有 $_constructor 方法判断是否是原生类来返回值  
 */
export const handleClassExpression: PluginObj = {
  visitor: {
    NewExpression(path) {
      // const callee = path.node.callee as t.Expression
      if (path.node.extra?.noNeedYield) return
      path.node.extra = { noNeedYield: true }
      const args = t.arrayExpression(
        path.node.arguments as (t.SpreadElement | t.Expression)[]
      )
      path.node.arguments = [
        spreadElement(
          t.assignmentExpression('=', t.identifier(UNI_PREFIX + 'temp'), args)
        )
      ]
      const callNewExpression = t.callExpression(
        t.memberExpression(
          t.identifier(UNI_PREFIX + 'vm'),
          t.identifier('New')
        ),
        [path.node, spreadElement(t.identifier(UNI_PREFIX + 'temp'))]
        // [
        //   /* (temp = A.prototype, temp.constructor) 目的是为了检测 A 是否存在 */
        //   t.sequenceExpression([
        //     t.assignmentExpression(
        //       '=',
        //       t.identifier(UNI_PREFIX + 'temp'),
        //       t.memberExpression(callee, t.identifier('prototype'))
        //     ),
        //     t.memberExpression(
        //       t.identifier(UNI_PREFIX + 'temp'),

        //       t.identifier('constructor')
        //     )
        //   ]),
        // ...path.node.arguments
        // ]
      )
      callNewExpression.loc = path.node.loc
      callNewExpression.extra = { noNeedYield: true }
      path.replaceWith(createYieldExpressionWithMap(callNewExpression))
    },
    ClassBody(path) {
      /* 是否有继承 */
      let hasSuper = !!(path.parentPath.node as t.ClassDeclaration).superClass

      /* 获取 constructor 方法，如果没有则赋空，有继承会加上  super(...args) */
      let constructor = path.node.body.find(
        p => p.type === 'ClassMethod' && p.kind === 'constructor'
      ) as t.ClassMethod

      /* 赋默认值 */
      if (!constructor) {
        constructor = t.classMethod(
          'constructor',
          t.identifier('constructor'),
          [t.restElement(t.identifier('args'))],
          t.blockStatement(
            (path.parentPath.node as t.ClassDeclaration | t.ClassExpression)
              .superClass
              ? [
                  t.expressionStatement(
                    t.callExpression(t.super(), [
                      t.spreadElement(t.identifier('args'))
                    ])
                  )
                ]
              : []
          )
        )
        path.node.body.unshift(constructor)
      }

      /* 收集在 constructor 外定义的属性 */
      const outSideProperty = path.node.body.filter(
        p => p.type === 'ClassProperty'
      ) as t.ClassProperty[]

      /* constructor 外定义的属性赋值语句 */
      const outSidePropertyAssign = outSideProperty.map(
        (p: t.ClassProperty) => {
          const assignNode = t.assignmentExpression(
            '=',
            p.static
              ? t.memberExpression(
                  // this.constructor.x = x
                  t.memberExpression(
                    t.thisExpression(),
                    t.identifier('constructor')
                  ),
                  p.key,
                  p.key.type !== 'Identifier'
                )
              : t.memberExpression(
                  t.thisExpression(),
                  p.key,
                  p.key.type !== 'Identifier'
                ), // this.x = x
            p.value ?? t.identifier('undefined')
          )
          assignNode.loc = p.loc
          return assignNode
        }
      )

      /* 处理 constructor 中的super() 语句 */
      if (hasSuper) {
        path.traverse({
          CallExpression(path) {
            if (path.node.callee.type === 'Super') {
              /* super.$_constructor */
              const callee = t.memberExpression(
                t.identifier('super'),
                t.identifier(COMMON_PREFIX + 'constructor')
              )
              const callSuper = t.callExpression(callee, path.node.arguments)
              callSuper.loc = path.node.loc

              /* ( super.$_constructor&&super.$_constructor(),...outSidePropertyAssign,this) */
              path.replaceWith(
                t.sequenceExpression([
                  t.logicalExpression('&&', callee, callSuper),
                  ...outSidePropertyAssign, // 插入 constructor 外定义的属性赋值语句
                  t.thisExpression()
                ])
              )
              path.stop()
            }
          }
        })
      }

      /* 在原 class 中删去所有 constructor 外定义的属性赋值语句和 constructor 方法  */
      path.node.body = path.node.body.filter(
        p => p.type !== 'ClassProperty' && p !== constructor
      )

      /* 函数结尾加上 return this */
      const constructorBody = constructor.body.body
      constructorBody.push(t.returnStatement(t.thisExpression()))

      /* 没有 super 则补上 constructor 外定义的属性赋值语句 */
      if (!hasSuper) {
        constructorBody.unshift(
          t.expressionStatement(
            t.sequenceExpression([...outSidePropertyAssign])
          )
        )
      }

      /* $_constructor 函数 */
      const alterConstructor = t.classMethod(
        'method',
        t.identifier(COMMON_PREFIX + 'constructor'),
        constructor.params,
        t.blockStatement(constructorBody)
      )

      path.node.body.push(alterConstructor)
    }
  }
}

/* $_initProperty 函数 */
// const initProperty = t.classMethod(
//   'method',
//   t.identifier(COMMON_PREFIX + 'initProperty'),
//   [],
//   t.blockStatement([
//     ...outSideProperty.map((p: t.ClassProperty) => {
//       const assignNode = t.assignmentExpression(
//         '=',
//         p.static
//           ? t.memberExpression(
//               // this.constructor.x
//               t.memberExpression(t.thisExpression(), t.identifier('constructor')),
//               p.key,
//               p.key.type !== 'Identifier'
//             )
//           : t.memberExpression(t.thisExpression(), p.key, p.key.type !== 'Identifier'), // this.x
//         p.value ?? t.identifier('undefined')
//       );
//       assignNode.loc = p.loc;
//       return t.expressionStatement(assignNode);
//     }),
//     t.returnStatement(t.thisExpression()),
//   ])
// );
// path.node.body.push(alterConstructor, initProperty);
/* $_super 函数 */
// if (hasSuper) {
//   /* super.$_constructor */
//   const callee = t.memberExpression(
//     t.identifier('super'),
//     t.identifier(COMMON_PREFIX + 'constructor')
//   );
//   const callExpression = t.callExpression(callee, [t.spreadElement(t.identifier('args'))]);
//   callExpression.loc = createLoc(-1);
//   const expression = t.expressionStatement(callExpression);

//   /* if(super.$_constructor) super.$_constructor(...args) */
//   const ifStament = t.ifStatement(callee, expression);
//   const superMethod = t.classMethod(
//     'method',
//     t.identifier(COMMON_PREFIX + 'super'),
//     [t.restElement(t.identifier('args'))],
//     t.blockStatement([
//       ifStament,
//       t.expressionStatement(callInitProperty),
//       t.returnStatement(t.thisExpression()),
//     ])
//   );
//   path.node.body.push(superMethod);
// }
