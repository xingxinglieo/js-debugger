function* global() {
  $__vm.initVariable({
    getLocal: () => ({
      fibonacci
    }),
    getClosure: {
      module: () => module
    },
    $__this: this
  });
  $__vm.pushGetBlocks({});

  function* fibonacci(n) {
    $__vm.initVariable({
      getLocal: () => ({
        n
      }),
      getClosure: {
        fibonacci: () => fibonacci
      },
      $__this: this
    });
    $__vm.pushGetBlocks({});

    if (yield [(yield [n == 1, 2, 6, 2, 12]) || (yield [n == 2, 2, 16, 2, 22]), 2, 6, 2, 22]) {
      $__vm.pushGetBlocks({});
      return [1, 3, 4, 3, 12];
      $__vm.popGetBlocks();
    }

    ;
    return [yield [(yield [$__vm.pushFrame(fibonacci(yield [n - 2, 5, 19, 5, 24]), "fibonacci"), 5, 9, 5, 25]) + (yield [$__vm.pushFrame(fibonacci(yield [n - 1, 5, 38, 5, 43]), "fibonacci"), 5, 28, 5, 44]), 5, 9, 5, 44], 5, 2, 5, 45];
    $__vm.popGetBlocks();
  }

  ;
  yield [module.exports = yield [$__vm.pushFrame(fibonacci(5), "fibonacci"), 6, 19, 6, 31], 6, 2, 6, 31];
  return [void 0, -1, -1, -1, -1];
  $__vm.popGetBlocks();
}

$__vm.pushFrame(global(), 'global');