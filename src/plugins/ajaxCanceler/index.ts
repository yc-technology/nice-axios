import type { Action, AjaxConfig, AjaxResponse, ComposePlugin } from '../../types'
import { AxiosCanceler } from './axiosCancel'

const axiosCanceler = new AxiosCanceler()

export const cancelAllAjax = () => axiosCanceler.removeAllPending()

export const addCancelerPlugin: ComposePlugin<AjaxResponse, AjaxConfig> = (next, config) => {
  config.timestamp = `${Date.now()}-${~~(Math.random() * 1000)}`

  const { headers: { ignoreCancelToken } = { ignoreCancelToken: false } } = config
  !ignoreCancelToken && axiosCanceler.addPending(config)

  if (config.meta) config.meta.canceler = () => axiosCanceler.removePending(config)
  else config.meta = { canceler: () => axiosCanceler.removePending(config) }

  return next()
}

export const removeCancelerPlugin: ComposePlugin<AjaxResponse, AjaxConfig> = async (next, config) => {
  const delay = new Promise<AjaxResponse>((resolve, reject) => {
    try {
      resolve(next())
    } catch (e) {
      reject(e)
    }
  })

  if (config.meta && config.meta.canceler) {
    const remove = config.meta.canceler as Action
    delay.then(remove, remove)
  }

  return delay.catch((error) => {
    if (error?.message?.startsWith('Cancel'))
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ cancel: true, ...error })

    return Promise.reject(error)
  })
}
