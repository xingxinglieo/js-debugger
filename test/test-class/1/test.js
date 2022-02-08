import { test, expect } from '@jest/globals';
import { traslatedCode, getCode, initVm } from '../../common.js'
import Point from './origin.js';

const path = 'test-class\\1';
const code = getCode(path).replace('export default', '') + `;
const point = new Point(5,5);
const pointString = point.toString();
const x = point.getX();
module.exports = { point , pointString,x };
`
const tCode = traslatedCode(path, code);
const vm = initVm(tCode)
vm.excute()
test(path, () => {
  const point = new Point(5, 5)
  const pointString = point.toString()
  const x = point.getX();
  const pointX = point.pointX
  expect(vm.module.exports.point).toMatchObject(point)
  expect(vm.module.exports.pointString).toBe(pointString)
  expect(vm.module.exports.x).toBe(x)
  expect(vm.module.exports.pointX).toBe(pointX)
})