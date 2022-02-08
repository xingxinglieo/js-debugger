function* global() {
  $__vm.initVariable({
    getLocal: () => ({}),
    getClosure: {
      module: () => module
    },
    $__this: this
  });
  $__vm.pushGetBlocks({
    arr: () => arr
  });
  const arr = yield [[1, 2, 3, 4, 5, 10, 9, 8, 7, 6], 1, 12, 1, 43];
  yield [module.exports = yield [{
    every: yield [[yield [$__vm.pushFrame(arr.every((function* (n) {
      $__vm.initVariable({
        getLocal: () => ({
          n
        }),
        getClosure: {},
        $__this: this
      });
      $__vm.pushGetBlocks({});
      return [yield [n > 9, 3, 25, 3, 30], 3, 25, 3, 30];
      $__vm.popGetBlocks();
    }).bind(this)), "arr.every"), 3, 10, 3, 31], yield [$__vm.pushFrame(arr.every((function* (n) {
      $__vm.initVariable({
        getLocal: () => ({
          n
        }),
        getClosure: {},
        $__this: this
      });
      $__vm.pushGetBlocks({});
      return [yield [n < 11, 3, 48, 3, 54], 3, 48, 3, 54];
      $__vm.popGetBlocks();
    }).bind(this)), "arr.every"), 3, 33, 3, 55]], 3, 9, 3, 56],
    some: yield [[yield [$__vm.pushFrame(arr.some((function* (n) {
      $__vm.initVariable({
        getLocal: () => ({
          n
        }),
        getClosure: {},
        $__this: this
      });
      $__vm.pushGetBlocks({});
      return [yield [n > 9, 4, 23, 4, 28], 4, 23, 4, 28];
      $__vm.popGetBlocks();
    }).bind(this)), "arr.some"), 4, 9, 4, 29], yield [$__vm.pushFrame(arr.some((function* (n) {
      $__vm.initVariable({
        getLocal: () => ({
          n
        }),
        getClosure: {},
        $__this: this
      });
      $__vm.pushGetBlocks({});
      return [yield [n > 11, 4, 45, 4, 51], 4, 45, 4, 51];
      $__vm.popGetBlocks();
    }).bind(this)), "arr.some"), 4, 31, 4, 52]], 4, 8, 4, 53],
    filter: yield [$__vm.pushFrame(arr.filter((function* (n) {
      $__vm.initVariable({
        getLocal: () => ({
          n
        }),
        getClosure: {},
        $__this: this
      });
      $__vm.pushGetBlocks({});
      return [yield [n > 5, 5, 26, 5, 31], 5, 26, 5, 31];
      $__vm.popGetBlocks();
    }).bind(this)), "arr.filter"), 5, 10, 5, 32],
    find: yield [[yield [$__vm.pushFrame(arr.find((function* (n) {
      $__vm.initVariable({
        getLocal: () => ({
          n
        }),
        getClosure: {},
        $__this: this
      });
      $__vm.pushGetBlocks({});
      return [yield [n === 5, 6, 23, 6, 30], 6, 23, 6, 30];
      $__vm.popGetBlocks();
    }).bind(this)), "arr.find"), 6, 9, 6, 31], yield [$__vm.pushFrame(arr.find((function* (n) {
      $__vm.initVariable({
        getLocal: () => ({
          n
        }),
        getClosure: {},
        $__this: this
      });
      $__vm.pushGetBlocks({});
      return [yield [n === 11, 6, 47, 6, 55], 6, 47, 6, 55];
      $__vm.popGetBlocks();
    }).bind(this)), "arr.find"), 6, 33, 6, 56]], 6, 8, 6, 57],
    findIndex: yield [[yield [$__vm.pushFrame(arr.findIndex((function* (n) {
      $__vm.initVariable({
        getLocal: () => ({
          n
        }),
        getClosure: {},
        $__this: this
      });
      $__vm.pushGetBlocks({});
      return [yield [n === 6, 7, 33, 7, 40], 7, 33, 7, 40];
      $__vm.popGetBlocks();
    }).bind(this)), "arr.findIndex"), 7, 14, 7, 41], yield [$__vm.pushFrame(arr.findIndex((function* (n) {
      $__vm.initVariable({
        getLocal: () => ({
          n
        }),
        getClosure: {},
        $__this: this
      });
      $__vm.pushGetBlocks({});
      return [yield [n === (yield [-1, 7, 68, 7, 70]), 7, 62, 7, 70], 7, 62, 7, 70];
      $__vm.popGetBlocks();
    }).bind(this)), "arr.findIndex"), 7, 43, 7, 71]], 7, 13, 7, 72],
    flatMap: yield [$__vm.pushFrame((yield [[yield [[1, 2], 8, 12, 8, 18], yield [[3, 4, yield [[5], 8, 27, 8, 30]], 8, 20, 8, 31]], 8, 11, 8, 32]).flatMap((function* (value) {
      $__vm.initVariable({
        getLocal: () => ({
          value
        }),
        getClosure: {},
        $__this: this
      });
      $__vm.pushGetBlocks({});
      return [value, 8, 50, 8, 55];
      $__vm.popGetBlocks();
    }).bind(this)), "(yield [[yield [[1, 2], 8, 12, 8, 18], yield [[3, 4, yield [[5], 8, 27, 8, 30]], 8, 20, 8, 31]], 8, 11, 8, 32]).flatMap"), 8, 11, 8, 56],
    map: yield [$__vm.pushFrame(arr.map((function* (n) {
      $__vm.initVariable({
        getLocal: () => ({
          n
        }),
        getClosure: {},
        $__this: this
      });
      $__vm.pushGetBlocks({});
      return [yield [n > 5, 9, 20, 9, 25], 9, 20, 9, 25];
      $__vm.popGetBlocks();
    }).bind(this)), "arr.map"), 9, 7, 9, 26],
    reduce: yield [$__vm.pushFrame(arr.reduce((function* (c, n) {
      $__vm.initVariable({
        getLocal: () => ({
          c,
          n
        }),
        getClosure: {},
        $__this: this
      });
      $__vm.pushGetBlocks({});
      return [yield [c + n, 10, 32, 10, 37], 10, 32, 10, 37];
      $__vm.popGetBlocks();
    }).bind(this), 0), "arr.reduce"), 10, 10, 10, 42],
    reduceRight: yield [$__vm.pushFrame(arr.reduce((function* (c, n) {
      $__vm.initVariable({
        getLocal: () => ({
          c,
          n
        }),
        getClosure: {},
        $__this: this
      });
      $__vm.pushGetBlocks({});
      return [yield [c + n, 11, 37, 11, 42], 11, 37, 11, 42];
      $__vm.popGetBlocks();
    }).bind(this), 0), "arr.reduce"), 11, 15, 11, 47],
    sort: yield [$__vm.pushFrame(arr.sort((function* (a, b) {
      $__vm.initVariable({
        getLocal: () => ({
          a,
          b
        }),
        getClosure: {},
        $__this: this
      });
      $__vm.pushGetBlocks({});
      return [yield [a - b, 12, 27, 12, 32], 12, 27, 12, 32];
      $__vm.popGetBlocks();
    }).bind(this)), "arr.sort"), 12, 8, 12, 33]
  }, 2, 17, 13, 1], 2, 0, 13, 1];
  return [void 0, -1, -1, -1, -1];
  $__vm.popGetBlocks();
}

$__vm.pushFrame(global(), 'global');