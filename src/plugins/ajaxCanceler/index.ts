import type { NiceAxiosConfig, AjaxResponse, ComposePlugin } from '../../types'

/**
 * 保存 signal 用于取消请求
 * @param next
 * @param config
 * @returns
 */
export const addCancelerPlugin: ComposePlugin<AjaxResponse, NiceAxiosConfig> = (next, config) => {
  config.timestamp = `${Date.now()}-${~~(Math.random() * 1000)}`

  const { meta } = config
  const { isSignalRequired } = meta || {}
  if (isSignalRequired) {
    config.$canceler?.addRequest(config)
  }

  return next()
}

/**
 * 去除取消 signal
 * @param next
 * @param config
 * @returns
 */
export const removeCancelerPlugin: ComposePlugin<AjaxResponse, NiceAxiosConfig> = async (next, config) => {
  return next().finally(() => {
    const { meta } = config
    const { isSignalRequired } = meta || {}
    if (isSignalRequired) {
      config.$canceler?.removeRequest(config)
    }
  })
}
