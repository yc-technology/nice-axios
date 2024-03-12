import type {
  AjaxAfterOptions,
  AjaxConfigMeta,
  NiceAjaxExecutor,
  AjaxResponse,
  ComposeResult,
  Func,
  NiceAxiosOptions,
} from '../types'

import { AxiosError } from 'axios'
import { errorResultNull } from '~/constants'
import { maybeFnCall } from './utils'

const handleSuccess = (res: AjaxResponse, meta: AjaxConfigMeta, options?: AjaxAfterOptions) => {
  // 默认
  const { disableRespProcessing = true } = meta
  const { handleCustomSuccess } = options || {}
  // 不进行任何处理，直接返回
  if (disableRespProcessing) return res

  if (handleCustomSuccess) return handleCustomSuccess(res, meta, options)

  // 用于页面代码可能需要直接获取code，data，message这些信息时开启
  const result = res.data

  if (!result) {
    // return '[HTTP] Request has no return value';
    return Promise.reject(errorResultNull)
  }
  const data = result[options?.dataFieldKey || 'data']
  const code = result[options?.codeFieldKey || 'code']
  const message = result[options?.messageFieldKey || 'message']

  // 接口请求成功，直接返回结果
  if (code === (options?.successCode || 200)) return data as AjaxResponse

  options?.onCatchBusinessError?.(code, message, result, meta)
  return Promise.reject(new Error(result))
}

/**
 * 抓取 http state code 错误
 * {
 *  state: 400 \ 500 \ 404 \ 403 \ 401
 *  }
 * @param error
 * @param options
 * @param meta
 * @returns
 */
const handleError = (error: AxiosError, options?: AjaxAfterOptions, meta?: AjaxConfigMeta) => {
  const { code, message } = error || {}
  const err: string = error.toString()
  if (code === 'ECONNABORTED' && message.includes('timeout')) options?.onCatchAxiosError?.(':timeout', meta)
  else if (err && err.includes('Network Error')) options?.onCatchAxiosError?.(':networkError', meta)
  else options?.onCatchAxiosError?.(error, meta)

  return Promise.reject(error)
}

export const buildDefaultAfterPlugin: (options?: NiceAxiosOptions | Func<NiceAxiosOptions>) => NiceAjaxExecutor =
  (options) => (next, config) => {
    const initOptions = maybeFnCall(options)

    return next().then(
      (v: AjaxResponse) => handleSuccess(v, config.meta || {}, initOptions?.afterPluginOption),
      (e: AxiosError) => handleError(e, initOptions?.afterPluginOption, config.meta),
    ) as ComposeResult<AjaxResponse>
  }
