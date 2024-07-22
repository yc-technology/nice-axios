import type { NiceAxiosExecutor } from '..'
import type { AjaxResponse, ComposeResult } from '../types'
import { sleep } from '../utils'

const requestPromise = new Map<string, ComposeResult<AjaxResponse>>()

export const mergeRequestPlugin: NiceAxiosExecutor = async (next, config) => {
  if (config.meta?.merge === false) return next()

  const requestId = `${config.url}${config.method}${JSON.stringify(config.data)}${JSON.stringify(config.params)}${config.meta}${config.headers}`
  const exitPromise = requestPromise.get(requestId.toString())
  if (!exitPromise) {
    const promise = next()
    requestPromise.set(requestId.toString(), promise)
    return promise.finally((result: any) => {
      // 200毫秒内相同请求将被merge
      sleep(config.meta?.mergeTimeout || 200).then(() => {
        requestPromise.delete(requestId.toString())
      })
      return result
    })
  } else {
    return exitPromise
    // return;
  }
}
