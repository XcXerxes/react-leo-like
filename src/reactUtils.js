export function isClass(func) {
  return typeof func === 'function' && /_classCallCheck/.test(Function.prototype.toString.call(func))
}

export function isStateLessComponent(element) {
  return !isClass(element) && typeof element === 'function'
}

