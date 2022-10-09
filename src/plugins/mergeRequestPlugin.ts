import { MD5 } from 'crypto-js'
import type { AjaxPlugin } from '..'
import { sleep } from '../utils'
import type { AjaxResponse, ComposeResult } from '../types'

const requestPromise = new Map<string, ComposeResult<AjaxResponse>>()

export const mergeRequestPlugin: AjaxPlugin = async (next, config) => {
  if (config.meta?.merge === false)
    return next()

  const requestId = MD5(JSON.stringify(config))
  const exitPromise = requestPromise.get(requestId.toString())
  if (!exitPromise) {
    const promise = next()
    requestPromise.set(requestId.toString(), promise)
    return promise.finally((result: any) => {
      // 200毫秒内相同请求将被merge
      sleep(200).then(() => {
        requestPromise.delete(requestId.toString())
      })
      return result
    })
  }
  else {
    return exitPromise
    // return;
  }
}
