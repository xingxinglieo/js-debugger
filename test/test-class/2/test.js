import { test, expect } from '@jest/globals';
import { traslatedCode, getCode, initVm } from '../../common.js'
const path = 'test-class\\2';
// const code = getCode(path).replace('export default', '') + `;
// const point = new Point(5,5);
// const pointString = point.toString();
// module.exports = { point , pointString };
// `
const tCode = traslatedCode(path, `
let person = new class {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}('张三');

person.sayName(); // "张三"
`);
const vm = initVm(tCode)
vm.excute()
test(path, () => {
})