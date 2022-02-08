class A extends Object {
  constructor() {
    super();
    this.a = 'a'
  }
}

class B extends A {
  a = 'aa';
  constructor(b) {
    super();
    this.b = b;
  }
}

export default class C extends B {
  constructor() {
    super(3);
    this.c = 'c';
  }
}