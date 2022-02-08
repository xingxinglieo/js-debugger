const mapTag = '[object Map]'
const setTag = '[object Set]'
const arrayTag = '[object Array]'
const objectTag = '[object Object]'
const argsTag = '[object Arguments]'

const boolTag = '[object Boolean]'
const dateTag = '[object Date]'
const numberTag = '[object Number]'
const stringTag = '[object String]'
const errorTag = '[object Error]'
const regexpTag = '[object RegExp]'
const funcTag = '[object Function]'
const genfuncTag = '[object GeneratorFunction]'

const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag]

function forEach(array: any[], iteratee: (value: any, key: any) => any) {
  let index = -1
  const length = array.length
  while (++index < length) {
    iteratee(array[index], index)
  }
  return array
}

function isObject(target: any) {
  const type = typeof target
  return target !== null && (type === 'object' || type === 'function')
}

function getType(target: any) {
  return Object.prototype.toString.call(target)
}

function getInit(target: any, type: string) {
  if (type === mapTag || type === setTag) {
    return []
  }
  return new target.constructor()
}

function cloneFunction(func: Function) {
  return {
    type: funcTag,
    name: func.name
  }
}

function cloneOtherType(target: any, type: string) {
  switch (type) {
    case boolTag:
    case numberTag:
    case stringTag:
    case errorTag:
    case dateTag:
    case regexpTag:
      return target
    case funcTag:
    case genfuncTag:
      return cloneFunction(target)
    default:
      return null
  }
}

export default function jsonViewClone(
  target: any,
  map = new WeakMap(),
  path: string[] = []
) {
  // 克隆原始类型
  if (!isObject(target)) {
    return target
  }

  // 初始化
  const type = getType(target)
  let cloneTarget: any
  if (deepTag.includes(type)) {
    cloneTarget = getInit(target, type)
  } else {
    return cloneOtherType(target, type)
  }

  // 防止循环引用
  if (map.get(target)) {
    return {
      type: '[Circular]',
      path: `['` + map.get(target).join(`']['`) + `']`
    }
  }
  map.set(target, path)

  // 克隆set map
  if (type === setTag) {
    target.forEach((value: any) => {
      cloneTarget.push(
        jsonViewClone(value, map, [...path, `Set.${cloneTarget.length}`])
      )
    })
    return { type, value: cloneTarget }
  }

  if (type === mapTag) {
    target.forEach((value: any, key: any) => {
      cloneTarget.push({
        key: jsonViewClone(key, map, [
          ...path,
          `Map.${cloneTarget.length}.key`
        ]),
        value: jsonViewClone(value, map, [
          ...path,
          `Map.${cloneTarget.length}.value`
        ])
      })
    })
    return { type, value: cloneTarget }
  }

  // 克隆对象和数组
  const keys = type === arrayTag ? undefined : Object.keys(target)
  forEach(keys || target, (value, key) => {
    if (keys) {
      key = value
    }
    cloneTarget[key] = jsonViewClone(target[key], map, [...path, key])
  })

  return cloneTarget
}
