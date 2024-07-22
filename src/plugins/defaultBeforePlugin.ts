import { isString, isUndefined } from 'lodash-es'
import type { Func, NiceAxiosExecutor, NiceAxiosOptions } from '../types'
import { stringifyParams } from '../utils'

import { AjaxMethods, ContentTypeEnum } from '~/constants'
import { getMultipartConfig, isHttpUrl, maybeFnCall } from './utils'

export const buildDefaultBeforePlugin: (
  options?: NiceAxiosOptions | Func<NiceAxiosOptions>
) => NiceAxiosExecutor = (options) => async (next, originalConfig) => {
  let config = originalConfig
  const initOptions = maybeFnCall(options) || {}
  const { defaultMeta = {}, getToken, headerAuthFieldKey, storageTokenFieldKey } = initOptions
  // initialize meta data
  if (!config.meta) config.meta = { showErrorTip: true }
  const meta = config.meta
  // merge defaultMeta
  Object.keys(defaultMeta).forEach((k) => {
    if (isUndefined(meta[k])) meta[k] = defaultMeta[k]
  })

  // default showErrorTip: true
  if (isUndefined(config.meta.showErrorTip)) config.meta.showErrorTip = true

  const { joinPrefix, isTokenRequired: addToken = true } = meta
  const { prefixURL, baseURL = '/' } = initOptions || {}

  if (!config.baseURL) config.baseURL = baseURL

  if (config.url && !isHttpUrl(config.url)) {
    if (joinPrefix && prefixURL) config.url = `${prefixURL}${config.url}`
  }

  if (!config.headers) config.headers = {}

  // add token default addToken: false
  // -----------------add token-----------------
  if (addToken) {
    let token
    if (getToken) {
      token = getToken && (await getToken())
    } else {
      token = localStorage.getItem(storageTokenFieldKey || 'token') || ''
    }
    if (token) config.headers[headerAuthFieldKey || 'Authorization'] = `${token}`
  }

  // -----------------add timestamp-----------------
  if (config.method === AjaxMethods.GET) {
    // some get request need to add timestamp to prevent cache
    if (!config.params && config.data) config.params = config.data
  } else {
    // initialize method, default value POST method

    // -----------------add method-----------------
    if (!config.method) {
      config.method = AjaxMethods.POST
      config.withCredentials = true
    }

    // -----------------add form content-type-----------------
    if (meta?.form) {
      config.headers['Content-Type'] = ContentTypeEnum.FORM_URLENCODED

      if (config.data instanceof FormData || isString(config.data))
        throw new Error(
          'buildBeforePlugin: config.data must be complex object on config.meta.form === true.'
        )
      else config.data = config.data ? stringifyParams(config.data) : ''

      config.params = undefined
    } else if (meta?.upload) {
      config = getMultipartConfig(config)
    }
  }

  return next()
}
