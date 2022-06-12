declare type ExtendsionObject = { [key in string]: any }

type FunctionComponent = (props: any, ...args: any[]) => any
type AnyFun = (...args: any[]) => any

declare type getAllPropsName<T extends FunctionComponent> =
  keyof Parameters<T>[0]

// 获取组件的props type 输出想获取的组件和多个propsName 返回对象
declare type getPropsType<
  T extends FunctionComponent, // Component
  S extends getAllPropsName<T> = getAllPropsName<T> // PropName s
> = {
  [K in S]: Parameters<T>[0][K]
}

// 获取单个的类型，会剔除 undefiend
declare type getPropType<
  T extends FunctionComponent, // Component
  S extends keyof Parameters<T>[0] // PropName
> = Exclude<Parameters<T>[0][S], undefined>

// 获取组件中某个 prop 函数的参数类型
declare type getFunctionPropParamsType<
  T extends FunctionComponent, // Component
  S extends keyof Parameters<T>[0] // PropName
> = getPropType<T, S> extends AnyFun ? Parameters<getPropType<T, S>> : never

declare type Intersection<T extends object, S extends object> = {
  [K in Extract<keyof T, keyof S>]: T[K] | S[K]
}

declare type getLoaderDataType<
  LoaderData extends (...args: any[]) => Promise<any>
> = ReturnType<LoaderData> extends Promise<infer T>
  ? { code: number; msg: string; data: T }
  : never
