type PromiseResult<T extends (...args: any) => any> =
  ReturnType<T> extends Promise<infer D> ? D : never;
