import { isFunction, isString } from 'lodash-es'
import type { Action2, NiceAxiosConfig, Func } from '../types'
import { ContentTypeEnum, AjaxMethods } from '../constants'

export function getMultipartConfig(config: NiceAxiosConfig) {
  const { data } = config
  const formData = new FormData()

  if (isString(data)) throw new Error('getMultipartConfig: multi part can not be string.')

  if (!(data instanceof FormData) && data) {
    Object.keys(data).forEach((key) => {
      const value = data[key]
      if (Array.isArray(value)) {
        value.forEach((item) => {
          formData.append(`${key}[]`, item)
        })
        return
      }

      formData.append(key, data[key])
    })
  }

  if (config.headers) {
    config.headers['Content-type'] = ContentTypeEnum.FORM_DATA
    config.headers.ignoreCancelToken = true
  } else {
    config.headers = { 'Content-type': ContentTypeEnum.FORM_DATA, ignoreCancelToken: true }
  }

  config.method = AjaxMethods.POST
  config.data = formData

  return config
}

export const isHttpUrl = (url?: string) => {
  if (!url) return false
  return url.startsWith('http')
}

export function checkStatus(status: number, msg: string, showMsg?: Action2<string, string>) {
  const error = (msg: string) => showMsg && showMsg(status.toString(), msg)

  switch (status) {
    case 400:
      error(msg)
      break
    case 401:
      error('用户没有权限（令牌、用户名、密码错误）!')
      break
    case 403:
      error('用户得到授权，但是访问是被禁止的。!')
      break
    case 404:
      error('网络请求错误,未找到该资源!')
      break
    case 405:
      error('网络请求错误,请求方法未允许!')
      break
    case 408:
      error('网络请求超时!')
      break
    case 500:
      error('服务器错误,请联系管理员!')
      break
    case 501:
      error('网络未实现!')
      break
    case 502:
      error('网络错误!')
      break
    case 503:
      error('服务不可用，服务器暂时过载或维护!')
      break
    case 504:
      error('网络超时!')
      break
    case 505:
      error('http版本不支持该请求!')
      break
    default:
      error('unknown')
  }
}

export const maybeFnCall = <T>(fn?: T | Func<T>) => {
  if (isFunction(fn)) return fn()
  return fn
}
