import { test, expect } from '@jest/globals';
import { traslatedCode, getCode, initVm } from '../common.js'

const path = undefined;
const code = `const arr = [1, 2, 3, 4, 5, 10, 9, 8, 7, 6];
module.exports = {
  every: [arr.every(n => n > 9), arr.every(n => n < 11)],
  some: [arr.some(n => n > 9), arr.some(n => n > 11)],
  filter: arr.filter(n => n > 5),
  find: [arr.find(n => n === 5), arr.find(n => n === 11)],
  findIndex: [arr.findIndex(n => n === 6), arr.findIndex(n => n === -1)],
  flatMap: [[1, 2], [3, 4, [5]]].flatMap(value => value),
  map: arr.map(n => n > 5),
  reduce: arr.reduce(((c, n) => c + n), 0),
  reduceRight: arr.reduce(((c, n) => c + n), 0),
  sort: arr.sort((a, b) => a - b)
}`
const tCode = traslatedCode('array', code);
const vm = initVm(tCode)
vm.excute()
test(path, () => {
  const arr = [1, 2, 3, 4, 5, 10, 9, 8, 7, 6];
  expect(vm.module.exports).toMatchObject({
    every: [arr.every(n => n > 9), arr.every(n => n < 11)],
    some: [arr.some(n => n > 9), arr.some(n => n > 11)],
    filter: arr.filter(n => n > 5),
    find: [arr.find(n => n === 5), arr.find(n => n === 11)],
    findIndex: [arr.findIndex(n => n === 6), arr.findIndex(n => n === -1)],
    flatMap: [[1, 2], [3, 4, [5]]].flatMap(value => value),
    map: arr.map(n => n > 5),
    reduce: arr.reduce(((c, n) => c + n), 0),
    reduceRight: arr.reduce(((c, n) => c + n), 0),
    sort: arr.sort((a, b) => a - b)
  })
})