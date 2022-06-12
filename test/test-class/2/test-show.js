function* global() {
  $__vm.initVariable({
    getLocal: () => ({}),
    getClosure: {},
    $__this: this
  });
  $__vm.pushGetBlocks({
    person: () => person
  });
  let person = yield [$__vm.New(class {
    *sayName() {
      $__vm.initVariable({
        getLocal: () => ({}),
        getClosure: {},
        $__this: this
      });
      $__vm.pushGetBlocks({});
      yield [$__vm.pushFrame(console.log(this.name), "console.log"), 8, 4, 8, 26];
      $__vm.popGetBlocks();
    }

    *$_constructor(name) {
      $__vm.initVariable({
        getLocal: () => ({
          name
        }),
        getClosure: {},
        $__this: this
      });
      $__vm.pushGetBlocks({});
      ;
      yield [this.name = name, 4, 4, 4, 20];
      return [this, -1, -1, -1, -1];
      $__vm.popGetBlocks();
    }

  }, '张三'), 2, 13, 10, 7];
  yield [$__vm.pushFrame(person.sayName(), "person.sayName"), 12, 0, 12, 16]; // "张三"

  return [void 0, -1, -1, -1, -1];
  $__vm.popGetBlocks();
}

$__vm.pushFrame(global(), 'global');