import { test, expect } from '@jest/globals';
import { traslatedCode, getCode, initVm } from '../../common.js'
import binarySearch from './origin'
const path = 'algorithm\\binarySearch';
const tCode = traslatedCode(path, getCode(path) + `;
const arr = [1,2,3,4,5,7,8,9,10]
module.exports = { a: binarySearch(arr,5), b:binarySearch(arr,6) }; 
`);
const vm = initVm(tCode)
vm.excute()
test(path, () => {
  const arr = [1, 2, 3, 4, 5, 7, 8, 9, 10]
  expect(vm.module.exports).toMatchObject({ a: binarySearch(arr, 5), b: binarySearch(arr, 6) })
})