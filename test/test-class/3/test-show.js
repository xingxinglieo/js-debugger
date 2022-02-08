function* global() {
  $__vm.initVariable({
    getLocal: () => ({}),
    getClosure: {
      module: () => module
    },
    $__this: this
  });
  $__vm.pushGetBlocks({
    IncreasingCounter: () => IncreasingCounter,
    counter: () => counter
  });

  class IncreasingCounter {
    get value() {
      console.log('Getting the current value!');
      return this._count;
    }

    *increment() {
      $__vm.initVariable({
        getLocal: () => ({}),
        getClosure: {},
        $__this: this
      });
      $__vm.pushGetBlocks({});
      $__temp = this._count++, yield [$__temp, 9, 4, 9, 18];
      $__vm.popGetBlocks();
    }

    *getTwo() {
      $__vm.initVariable({
        getLocal: () => ({}),
        getClosure: {},
        $__this: this
      });
      $__vm.pushGetBlocks({});
      return [2, 12, 4, 12, 12];
      $__vm.popGetBlocks();
    }

    *$_constructor(...args) {
      $__vm.initVariable({
        getLocal: () => ({
          args
        }),
        getClosure: {},
        $__this: this
      });
      $__vm.pushGetBlocks({});
      yield [this._count = 0, 2, 2, 2, 13], yield [this._two = yield [$__vm.pushFrame(this.getTwo(), "this.getTwo"), 3, 9, 3, 22], 3, 2, 3, 23];
      return [this, -1, -1, -1, -1];
      $__vm.popGetBlocks();
    }

  }

  ;
  const counter = yield [$__vm.New(IncreasingCounter), 15, 16, 15, 39];
  yield [$__vm.pushFrame(counter.increment(), "counter.increment"), 16, 0, 16, 19];
  yield [module.exports = counter, 17, 0, 17, 24];
  return [void 0, -1, -1, -1, -1];
  $__vm.popGetBlocks();
}

$__vm.pushFrame(global(), 'global');