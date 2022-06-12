import { transformFromAstSync } from '@babel/core';
import { handleClassExpression } from '../dist/plugins/handleClassExpression.js';
import { addBlockToForSwitchStatement } from '../dist/plugins/addBlockToForSwitchStatement.js';
import { arrowFunctionToCommon } from '../dist/plugins/arrowFunctionToCommon.js';
import { commonFunctionToGenerator } from '../dist/plugins/commonFunctionToGenerator.js';
import { handleCallExpression } from '../dist/plugins/handleCallExpression.js';
import { injectInitBlockVariable } from '../dist/plugins/injectInitBlockVariable.js';
import { injectInitFunctionVariable } from '../dist/plugins/injectInitFunctionVariable.js';
import { Vm } from '../dist/Vm.js'
import { initArray } from '../initArray.js'
import fs from 'fs';
import { parse } from '@babel/parser';
// const code = fs.readFileSync(process.cwd() + '\\origin.js', 'utf-8');
// sourceMaps:'inline',
export const traslatedCode = (dir, code) => {
  code = code ? code : getCode(dir)
  const tCode = transformFromAstSync(parse(code), code, {
    plugins: [
      handleClassExpression,
      addBlockToForSwitchStatement,
      arrowFunctionToCommon,
      commonFunctionToGenerator,
      handleCallExpression,
      injectInitBlockVariable,
      injectInitFunctionVariable,
    ],
  })?.code ?? '';
  fs.writeFileSync(process.cwd() + '\\test\\' + dir + '\\test-show.js', tCode, { encoding: 'utf8' }, (_err) => { });
  return tCode
}
export const initVm = (tCode) => {
  const vm = new Vm(tCode)
  initArray(vm)
  return vm
}

export const getCode = (dir) => {
  return fs.readFileSync(process.cwd() + '\\test\\' + dir + '\\origin.js', 'utf-8').replaceAll('export default', '');
}