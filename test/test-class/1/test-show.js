function* global() {
  $__vm.initVariable({
    getLocal: () => ({}),
    getClosure: {
      module: () => module
    },
    $__this: this
  });
  $__vm.pushGetBlocks({
    Point: () => Point,
    point: () => point,
    pointString: () => pointString,
    x: () => x
  });

  class Point {
    *toString() {
      $__vm.initVariable({
        getLocal: () => ({}),
        getClosure: {},
        $__this: this
      });
      $__vm.pushGetBlocks({});
      return [yield [(yield [(yield [(yield ['(' + this.x, 10, 11, 10, 23]) + ', ', 10, 11, 10, 30]) + this.y, 10, 11, 10, 39]) + ')', 10, 11, 10, 45], 10, 4, 10, 46];
      $__vm.popGetBlocks();
    }

    *[yield ['get' + 'X', 12, 3, 12, 14]]() {
      $__vm.initVariable({
        getLocal: () => ({}),
        getClosure: {},
        $__this: this
      });
      $__vm.pushGetBlocks({});
      return [this.x, 13, 4, 13, 17];
      $__vm.popGetBlocks();
    }

    *$_constructor(x, y) {
      $__vm.initVariable({
        getLocal: () => ({
          x,
          y
        }),
        getClosure: {},
        $__this: this
      });
      $__vm.pushGetBlocks({});
      yield [this.name = 1, 2, 2, 2, 11], yield [this[yield [yield ['point' + 'X', 3, 3, 3, 16], 3, 3, 3, 16]] = this.x, 3, 2, 3, 27];
      yield [this.x = x, 5, 4, 5, 14];
      yield [this.y = y, 6, 4, 6, 14];
      return [this, -1, -1, -1, -1];
      $__vm.popGetBlocks();
    }

  }

  ;
  const point = yield [$__vm.New(Point, 5, 5), 16, 14, 16, 28];
  const pointString = yield [$__vm.pushFrame(point.toString(), "point.toString"), 17, 20, 17, 36];
  const x = yield [$__vm.pushFrame(point.getX(), "point.getX"), 18, 10, 18, 22];
  yield [module.exports = yield [{
    point,
    pointString,
    x
  }, 19, 17, 19, 42], 19, 0, 19, 42];
  return [void 0, -1, -1, -1, -1];
  $__vm.popGetBlocks();
}

$__vm.pushFrame(global(), 'global');