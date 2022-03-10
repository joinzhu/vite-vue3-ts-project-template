import { isEmpty } from 'lodash'
import { tryCatch } from '../../utils/index'
import { ajaxParamsType, paramsType } from './ajaxType'

class Ajax {
  instance: any

  private baseUrl: string

  private headers: any

  constructor(params: ajaxParamsType) {
    const { baseUrl, headers } = params
    this.baseUrl = baseUrl
    this.headers = headers
    this.instance = this.createFetch()
  }

  createFetch() {
    return async (url: string, data: any, headers: any) => {
      const allUrl = this.baseUrl + url
      // 不需要请求拦截器，有全局配置直接这里加
      const params = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          ...this.headers,
          ...headers
        }
      } as paramsType

      !isEmpty(data) && (params.data = data)
      const [err, res] = await tryCatch(fetch, allUrl, params)
      if (err) {
        return new Error('错了')
      }

      return res
    }
  }

  // 响应拦截器
  responseInterceptor(res: any) {
    console.warn(res)
  }

  getAjax() {
    return new Proxy(this.instance, {
      async apply(target, ctx, args) {
        console.warn(args)

        const res = (await target.apply(ctx, args)).json()

        ctx.responseInterceptor(res)

        return res
      }
    })
  }
}

export default Ajax
