import { test, expect } from '@jest/globals';
import fibonacci from './origin.js'
import { traslatedCode, getCode, initVm } from '../common.js'

const path = 'fibonacci';
const code = getCode(path).replace('export default', '') + ';module.exports = fibonacci(5);'
const tCode = traslatedCode('fibonacci',code);
const vm = initVm(tCode)
vm.excute()
test(path, () => {
  expect(vm.module.exports).toBe(fibonacci(5))
})