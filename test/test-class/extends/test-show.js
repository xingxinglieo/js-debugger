function* global() {
  $__vm.initVariable({
    getLocal: () => ({}),
    getClosure: {
      module: () => module
    },
    $__this: this
  });
  $__vm.pushGetBlocks({
    A: () => A,
    B: () => B,
    C: () => C,
    c: () => c
  });

  class A extends Object {
    *$_constructor() {
      $__vm.initVariable({
        getLocal: () => ({}),
        getClosure: {},
        $__this: this
      });
      $__vm.pushGetBlocks({});
      super.$_constructor && (yield [$__vm.pushFrame(super.$_constructor(), "super.$_constructor"), 3, 4, 3, 11]), this;
      yield [this.a = 'a', 4, 4, 4, 16];
      return [this, -1, -1, -1, -1];
      $__vm.popGetBlocks();
    }

  }

  class B extends A {
    *$_constructor(b) {
      $__vm.initVariable({
        getLocal: () => ({
          b
        }),
        getClosure: {},
        $__this: this
      });
      $__vm.pushGetBlocks({});
      super.$_constructor && (yield [$__vm.pushFrame(super.$_constructor(), "super.$_constructor"), 11, 4, 11, 11]), yield [this.a = 'aa', 9, 2, 9, 11], this;
      yield [this.b = b, 12, 4, 12, 14];
      return [this, -1, -1, -1, -1];
      $__vm.popGetBlocks();
    }

  }

  class C extends B {
    *$_constructor() {
      $__vm.initVariable({
        getLocal: () => ({}),
        getClosure: {},
        $__this: this
      });
      $__vm.pushGetBlocks({});
      super.$_constructor && (yield [$__vm.pushFrame(super.$_constructor(3), "super.$_constructor"), 18, 4, 18, 12]), this;
      yield [this.c = 'c', 19, 4, 19, 16];
      return [this, -1, -1, -1, -1];
      $__vm.popGetBlocks();
    }

  }

  ;
  const c = yield [$__vm.New(C), 22, 10, 22, 17];
  yield [module.exports = c, 23, 0, 23, 18];
  return [void 0, -1, -1, -1, -1];
  $__vm.popGetBlocks();
}

$__vm.pushFrame(global(), 'global');