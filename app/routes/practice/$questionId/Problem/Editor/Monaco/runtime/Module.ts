/* 用于拦截访问全局作用域 */
import { ALLOW_GLOBAL } from '~/config'
export class Module {
  exports: ExtendsionObject = {}
  wrapper = [`return (function (exports, module) { 
    "use strict"
    `, '\n});']

  wrap(script: string) {
    return `${this.wrapper[0]} ${script} ${this.wrapper[1]}`
  }

  runInContext(code: string) {
    code = `with (sandbox) { ${code} }`
    const fn = new Function('sandbox', code)
    return (sandbox: ExtendsionObject) => {
      const proxy = new Proxy(sandbox, {
        has(_target, key: string) {
          if (!ALLOW_GLOBAL.includes(key)) {
            return true
          }
          return false
        },
        get(target, key, receiver) {
          if (key === Symbol.unscopables) {
            return undefined
          }
          return Reflect.get(target, key, receiver)
        }
      })
      return fn(proxy)
    }
  }
  compile(content: string, sandbox: ExtendsionObject) {
    const wrapper = this.wrap(content)
    const compiledWrapper = this.runInContext(wrapper)(sandbox)
    compiledWrapper.call(this.exports, this.exports, this)
  }
}
