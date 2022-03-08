/**
 * @description: try catch
 * @param {function} 需要执行逻辑的函数
 * @param {any} 执行函数的参数
 * @return {array} [错误,数据]
 */
export async function tryCatch(...args: any) {
  const params = Array.from(args)
  const asyncFn = params.shift() as any
  try {
    const res = await asyncFn(...params)
    return [null, res]
  } catch (error: any) {
    console.log(
      new Error(
        `Code block ${asyncFn.name}\n${
          error.message || '请求服务失败，服务未响应！'
        }`
      )
    )
    return [error, null]
  }
}

/**
 * 生成query参数
 * @param obj
 * @return {string}
 */
export function createQueryStr(obj: any) {
  let str = ''
  if (obj && obj instanceof Object) {
    const keys = Object.keys(obj)
    keys.forEach((key, index) => {
      const v = Array.isArray(obj[key])
        ? encodeURIComponent(JSON.stringify(obj[key]))
        : obj[key]
      str += `${index === 0 ? '?' : '&'}${key}=${v}`
    })
  }
  return str
}
