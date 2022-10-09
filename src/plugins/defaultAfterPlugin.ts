import { getNiceAxiosOptions } from '..'
import type { AjaxAfterOptions, AjaxConfigMeta, AjaxPlugin, AjaxResponse, ComposeResult } from '../types'

import { errorResultNull } from './constants'
import { checkStatus } from './utils'

interface InnerError {
  code: string | number
  message: string
  response?: {
    status: number
    data?: {
      message: string
    }
  }
}

const handleSuccess = (res: AjaxResponse, meta: AjaxConfigMeta, options?: AjaxAfterOptions) => {
  const { isTransformRequestResult = true, allReturn } = meta
  const resultKey = options?.resultKey || 'data'
  // 不进行任何处理，直接返回
  // 用于页面代码可能需要直接获取code，data，message这些信息时开启
  if (allReturn)
    return res

  if (!isTransformRequestResult)
    return (res[resultKey] || res) as AjaxResponse

  const result = res[resultKey]

  if (!result) {
    // return '[HTTP] Request has no return value';
    return Promise.reject(errorResultNull)
  }
  const { code, data, message } = result

  // 接口请求成功，直接返回结果
  if (code === (options?.successCode || 200))
    return data as AjaxResponse

  options?.checkErrorCode(code, message, result)
  return Promise.reject(new Error(result))
}

const handleError = (error: InnerError, options?: AjaxAfterOptions) => {
  const { response, code, message } = error || {}
  const msg: string = response && response.data && response.data ? response.data.message : ''
  const err: string = error.toString()

  if (code === 'ECONNABORTED' && message.includes('timeout'))
    options?.checkHttpErrorCode(':timeout', '接口请求超时,请刷新页面重试!')

  if (err && err.includes('Network Error'))
    options?.checkHttpErrorCode(':networkError', '请检查您的网络连接是否正常!')

  checkStatus(response ? response.status : -1, msg, options?.checkHttpErrorCode)
  return Promise.reject(error)
}

export const buildAfterPlugin: AjaxPlugin = (next, config) => {
  const { afterPluginOption } = getNiceAxiosOptions() || {}
  const delay = new Promise<AjaxResponse>((resolve, reject) => {
    try {
      resolve(next())
    }
    catch (e) {
      console.error({ req: config.data, url: config.url })
      reject(e)
    }
  })

  return delay.then(
    v => handleSuccess(v, config.meta || {}, afterPluginOption),
    e => handleError(e as InnerError, afterPluginOption),
  ) as ComposeResult<AjaxResponse>
}
