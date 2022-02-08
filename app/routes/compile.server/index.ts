import type { ActionFunction } from 'remix'
import { transformAsync, transformFromAstAsync } from '@babel/core'
import { handleClassExpression } from './plugins/handleClassExpression'
import { addBlockToForSwitchStatement } from './plugins/addBlockToForSwitchStatement'
import { arrowFunctionToCommon } from './plugins/arrowFunctionToCommon'
import { commonFunctionToGenerator } from './plugins/commonFunctionToGenerator'
import { handleCallExpression } from './plugins/handleCallExpression'
import { injectInitBlockVariable } from './plugins/injectInitBlockVariable'
import { injectInitFunctionVariable } from './plugins/injectInitFunctionVariable'
import jsonResonse from '~/utils/jsonResponse.server'

const transform = async (code: string) => {
  const t = await transformAsync(code, {
    ast: true,
    plugins: [
      handleClassExpression,
      addBlockToForSwitchStatement,
      arrowFunctionToCommon,
      commonFunctionToGenerator,
      handleCallExpression,
      injectInitBlockVariable,
      injectInitFunctionVariable
    ]
  })
  // return (
  //   await transformFromAstAsync(t?.ast!, t?.code!, { presets: ['minify'] })
  // )?.code!
  return t?.code
}

export const action: ActionFunction = async ({ request }) => {
  const code = (await request.formData()).get('code') as string | null
  try {
    if (typeof code === 'string') {
      return jsonResonse({
        msg: 'Compile Success',
        data: {
          originCode: code,
          transformedCode: await transform(code)
        }
      })
    } else {
      return jsonResonse({
        code: 5002,
        msg: 'Validation Fail',
        init: {
          status: 500
        }
      })
    }
  } catch (e: any) {
    return jsonResonse({
      code: 5001,
      data: {
        originCode: code,
        error: e
      },
      msg: 'Compile Error',
      init: {
        status: 500
      }
    })
  }
}
