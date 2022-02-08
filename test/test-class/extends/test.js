import { test, expect } from '@jest/globals';
import { traslatedCode, getCode, initVm } from '../../common.js'
import C from './origin'
const path = 'test-class\\extends';
const tCode = traslatedCode(path, getCode(path) + `;
const c = new C();
module.exports = c; 
`);
const vm = initVm(tCode)
vm.excute()
test(path, () => {
  const c = new C();
  console.log(vm.module.exports)
  expect(vm.module.exports).toMatchObject(c)
})