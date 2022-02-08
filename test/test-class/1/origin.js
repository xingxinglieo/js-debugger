export default class Point {
  name = 1;
  ['point' + 'X'] = this.x;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
  ['get' + 'X']() {
    return this.x
  }
}