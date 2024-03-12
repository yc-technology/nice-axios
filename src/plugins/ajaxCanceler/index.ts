import type { Action, AjaxConfig, AjaxResponse, ComposePlugin } from '../../types'

export const addCancelerPlugin: ComposePlugin<AjaxResponse, AjaxConfig> = (next, config) => {
  config.timestamp = `${Date.now()}-${~~(Math.random() * 1000)}`

  const { headers: { ignoreCancelToken } = { ignoreCancelToken: false }, $canceler } = config
  !ignoreCancelToken && $canceler?.addPending(config)

  if (config.meta) config.meta.canceler = () => $canceler?.removePending(config)
  else config.meta = { canceler: () => $canceler?.removePending(config) }

  return next()
}

export const removeCancelerPlugin: ComposePlugin<AjaxResponse, AjaxConfig> = async (next, config) => {
  const remove = config.meta?.canceler as Action
  return next().finally(() => remove())
}
