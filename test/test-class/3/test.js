import { test, expect } from '@jest/globals';
import { traslatedCode, getCode, initVm } from '../../common.js'
import IncreasingCounter from './origin'
const path = 'test-class\\3';
const tCode = traslatedCode(path, getCode(path) + `;
const counter = new IncreasingCounter();
counter.increment();
module.exports = counter; 
`);
const vm = initVm(tCode)
vm.excute()
test(path, () => {
  const counter = new IncreasingCounter();
  counter.increment();
  expect(vm.module.exports.value).toBe(counter.value);
  expect(vm.module.exports._two).toBe(counter._two);
})