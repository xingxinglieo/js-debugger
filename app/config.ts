const UNI_PREFIX = '$__'
const COMMON_PREFIX = '$_'
const ALLOW_GLOBAL = [
  /* 全局方法 */
  'console',
  'isNaN',
  'parseFloat',
  'parseInt',
  /* 原生类 */
  'Array',
  'Object',
  'Map',
  'Set',
  'Date',
  'RegExp',
  'Boolean',
  'Number',
  'String',
  'Math',
  /* 静态类 */
  'JSON',
  'NaN'
]

/* 难度的字体颜色和中文映射 */
const diffcultyMap = [
  [],
  ['入门', '#67C23A'],
  ['简单', '#67C23A'],
  ['中等', '#E6A23C'],
  ['较难', '#F56C6C']
]
export { UNI_PREFIX, COMMON_PREFIX, ALLOW_GLOBAL, diffcultyMap }
