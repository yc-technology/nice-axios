import { isString, isUndefined } from 'lodash-es'
import type { AjaxConfig, AjaxPlugin, AjaxResponse, ComposePlugin, Func1 } from '../types'
import { AjaxMethods } from '../types'
import { stringifyParams } from '../utils'

import type { NiceAxiosOptions } from '../..'
import { ContentTypeEnum } from './constants'
import { getMultipartConfig, isHttpUrl } from './utils'

export interface AjaxBeforeOptions {
  apiUrl?: string
  urlPrefix?: string
}

export type BuildBeforePlugin = Func1<AjaxBeforeOptions, ComposePlugin<AjaxResponse, AjaxConfig>>

export const buildBeforePlugin: (options?: NiceAxiosOptions) => AjaxPlugin = options => (next, originalConfig) => {
  let config = originalConfig

  // initialize meta data
  if (!config.meta)
    config.meta = { showErrorTip: true }
  const { meta } = config

  // default showErrorTip: true
  if (isUndefined(config.meta.showErrorTip))
    config.meta.showErrorTip = true

  const { joinPrefix } = meta
  const { prefixURL, baseURL = '/' } = options || {}

  if (!config.baseURL)
    config.baseURL = baseURL

  if (config.url && !isHttpUrl(config.url)) {
    if (joinPrefix && prefixURL)
      config.url = `${prefixURL}${config.url}`
  }

  if (!config.headers)
    config.headers = {}

  if (config.method === AjaxMethods.GET) {
    if (!isString(config.params)) {
      config.data = {
        // 给 get 请求加上时间戳参数，避免从缓存中拿数据。
        params: { ...config.params, _t: Date.now() },
      }
    }
  }
  else {
    // initialize method, default value POST method
    if (!config.method) {
      config.method = AjaxMethods.POST
      config.withCredentials = true
    }

    if (meta?.form) {
      config.headers['Content-Type'] = ContentTypeEnum.FORM_URLENCODED

      if (config.data instanceof FormData || isString(config.data))
        throw new Error('buildBeforePlugin: config.data must be complex object on config.meta.form === true.')

      else
        config.data = config.data ? stringifyParams(config.data) : ''

      config.params = undefined
    }

    else if (meta?.upload) {
      config = getMultipartConfig(config)
    }
  }

  return next()
}
