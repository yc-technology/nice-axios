import type {
  ComposeResult,
  Func,
  NiceAjaxExecutor,
  NiceAxiosAfterOptions,
  NiceAxiosConfig,
  NiceAxiosOptions,
} from '../types'

import { AxiosError, AxiosResponse } from 'axios'
import { errorResultNull } from '~/constants'
import { maybeFnCall } from './utils'

const handleSuccess = (res: AxiosResponse, config: NiceAxiosConfig, options?: NiceAxiosAfterOptions) => {
  // 默认
  const { meta = {} } = config
  const { disableRespProcessing = true } = meta
  const { handleCustomSuccess } = options || {}
  // 不进行任何处理，直接返回
  if (disableRespProcessing) return res

  if (handleCustomSuccess) return handleCustomSuccess(res, meta, options)

  // 用于页面代码可能需要直接获取code，data，message这些信息时开启
  const result = res.data

  if (!result) {
    // return '[HTTP] Request has no return value';
    return Promise.reject(new AxiosError(errorResultNull, AxiosError.ERR_BAD_RESPONSE, res.config, res.request, res))
  }
  const data = result[options?.dataFieldKey || 'data']
  const code = result[options?.codeFieldKey || 'code']
  const message = result[options?.messageFieldKey || 'message']

  // 接口请求成功，直接返回结果
  if (code === (options?.successCode || 200)) return data as AxiosResponse

  options?.onCatchBusinessError?.(code, message, res, config)
  return Promise.reject(new AxiosError(message, AxiosError.ERR_BAD_RESPONSE, res.config, res.request, res))
}

/**
 * 抓取 http state code 错误
 * {
 *  state: 400 \ 500 \ 404 \ 403 \ 401
 *  }
 * @param error
 * @param options
 * @param config
 * @returns
 */
const handleError = (error: AxiosError, config?: NiceAxiosConfig, options?: NiceAxiosAfterOptions) => {
  options?.onCatchAxiosError?.(error, config)
  return Promise.reject(error)
}

export const buildDefaultAfterPlugin: (options?: NiceAxiosOptions | Func<NiceAxiosOptions>) => NiceAjaxExecutor =
  (options) => (next, config) => {
    const initOptions = maybeFnCall(options)

    return next().then(
      (v: AxiosResponse) => handleSuccess(v, config, initOptions?.afterPluginOption),
      (e: AxiosError) => handleError(e, config, initOptions?.afterPluginOption),
    ) as ComposeResult<AxiosResponse>
  }
