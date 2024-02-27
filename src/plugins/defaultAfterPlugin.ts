import type {
  AjaxAfterOptions,
  AjaxConfigMeta,
  AjaxPlugin,
  AjaxResponse,
  ComposeResult,
  Func,
  InnerError,
  NiceAxiosOptions,
} from '../types'

import { errorResultNull } from '~/constants'
import { maybeFnCall } from './utils'

const handleSuccess = (res: AjaxResponse, meta: AjaxConfigMeta, options?: AjaxAfterOptions) => {
  // 默认
  const { isTransformRequestResult = true, allReturn = true } = meta
  const resultKey = options?.resultKey || 'data'
  // 不进行任何处理，直接返回
  // 用于页面代码可能需要直接获取code，data，message这些信息时开启
  if (allReturn) return res

  if (!isTransformRequestResult) return (res[resultKey] || res) as AjaxResponse

  const result = res[resultKey]

  if (!result) {
    // return '[HTTP] Request has no return value';
    return Promise.reject(errorResultNull)
  }
  const { code, data, message } = result

  // 接口请求成功，直接返回结果
  if (code === (options?.successCode || 200)) return data as AjaxResponse

  options?.checkErrorCode(code, message, result, meta)
  return Promise.reject(new Error(result))
}

const handleError = (error: InnerError, options?: AjaxAfterOptions, meta?: AjaxConfigMeta) => {
  const { code, message } = error || {}
  const err: string = error.toString()

  if (code === 'ECONNABORTED' && message.includes('timeout')) options?.checkHttpErrorCode(':timeout', meta)

  if (err && err.includes('Network Error')) options?.checkHttpErrorCode(':networkError', meta)

  options?.checkHttpErrorCode && options.checkHttpErrorCode(error, meta)

  return Promise.reject(error)
}

export const buildAfterPlugin: (options?: NiceAxiosOptions | Func<NiceAxiosOptions>) => AjaxPlugin =
  (options) => (next, config) => {
    const initOptions = maybeFnCall(options)
    const delay = new Promise<AjaxResponse>((resolve, reject) => {
      try {
        resolve(next())
      } catch (e) {
        console.error({ req: config.data, url: config.url })
        reject(e)
      }
    })

    return delay.then(
      (v) => handleSuccess(v, config.meta || {}, initOptions?.afterPluginOption),
      (e) => handleError(e as InnerError, initOptions?.afterPluginOption, config.meta),
    ) as ComposeResult<AjaxResponse>
  }
