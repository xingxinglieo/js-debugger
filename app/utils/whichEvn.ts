/* 通过判断 document 是否存在 简单判断是否是 ssr 环境 */
export default function F() {
  try {
    return document === document
  } catch {
    return false
  }
}
export const isSSR = !F()
export const isClient = F()
