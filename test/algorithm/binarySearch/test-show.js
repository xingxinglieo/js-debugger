function* global() {
  $__vm.initVariable({
    getLocal: () => ({
      binarySearch
    }),
    getClosure: {
      module: () => module
    },
    $__this: this
  });
  $__vm.pushGetBlocks({
    arr: () => arr
  });

  // 逻辑很简单，主要是边界处理的问题
  function* binarySearch(arr, num) {
    $__vm.initVariable({
      getLocal: () => ({
        arr,
        num
      }),
      getClosure: {},
      $__this: this
    });
    $__vm.pushGetBlocks({
      left: () => left,
      right: () => right,
      middle: () => middle
    });
    let left = 0;
    let right = yield [arr.length - 1, 4, 14, 4, 28];
    let middle;

    while (yield [(yield [right - left, 6, 9, 6, 21]) > 1, 6, 9, 6, 25]) {
      $__vm.pushGetBlocks({
        now: () => now
      });
      yield [middle = yield [$__vm.pushFrame(Math.floor(yield [(yield [left + right, 7, 25, 7, 37]) / 2, 7, 24, 7, 42]), "Math.floor"), 7, 13, 7, 43], 7, 4, 7, 43];
      const now = arr[middle];
      if (yield [num === now, 9, 8, 9, 19]) return [middle, 9, 21, 9, 34];
      if (yield [num > now, 10, 8, 10, 17]) yield [left = middle, 10, 19, 10, 32];else yield [right = middle, 11, 9, 11, 23];
      $__vm.popGetBlocks();
    }

    if (yield [arr[right] === num, 13, 6, 13, 24]) return [right, 13, 26, 13, 38];
    if (yield [arr[left] === num, 14, 6, 14, 23]) return [left, 14, 25, 14, 36];
    return [yield [-1, 15, 9, 15, 11], 15, 2, 15, 11];
    $__vm.popGetBlocks();
  }

  ;
  const arr = yield [[1, 2, 3, 4, 5, 7, 8, 9, 10], 17, 12, 17, 32];
  yield [module.exports = yield [{
    a: yield [$__vm.pushFrame(binarySearch(arr, 5), "binarySearch"), 18, 22, 18, 41],
    b: yield [$__vm.pushFrame(binarySearch(arr, 6), "binarySearch"), 18, 45, 18, 64]
  }, 18, 17, 18, 66], 18, 0, 18, 66];
  return [void 0, -1, -1, -1, -1];
  $__vm.popGetBlocks();
}

$__vm.pushFrame(global(), 'global');