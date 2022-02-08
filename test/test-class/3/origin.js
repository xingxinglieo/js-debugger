export default class IncreasingCounter {
  _count = 0;
  _two = this.getTwo();
  get value() {
    console.log('Getting the current value!');
    return this._count;
  }
  increment() {
    this._count++;
  }
  getTwo() {
    return 2
  }
}