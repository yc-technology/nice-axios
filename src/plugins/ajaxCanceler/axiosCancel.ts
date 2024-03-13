import type { AxiosRequestConfig } from 'axios'

import type { NiceAxiosConfig } from '../../types'

export const getPendingUrl = (config: AxiosRequestConfig | NiceAxiosConfig) =>
  [config.url, (config as NiceAxiosConfig).timestamp].join('&')

export class AxiosCanceler {
  // 声明一个 Map 用于存储每个请求的标识 和 取消函数
  pendingMap = new Map<string, AbortController>()

  /**
   * 添加请求
   * @param {Object} config
   */
  addRequest(config: AxiosRequestConfig) {
    const url = getPendingUrl(config)
    // 如果没有 signal 属性，则添加 signal 属性
    if (!config.signal) {
      const abortController = new AbortController()
      config.signal = abortController.signal
      this.pendingMap.set(url, abortController)
    }
  }

  /**
   * 移除请求
   * @param {Object} config
   */
  removeRequest(config: AxiosRequestConfig) {
    const url = getPendingUrl(config)
    if (this.pendingMap.has(url)) {
      this.pendingMap.delete(url)
      config.signal = undefined
    }
  }

  cancelRequest(config: AxiosRequestConfig) {
    const url = getPendingUrl(config)
    if (this.pendingMap.has(url)) {
      const abortController = this.pendingMap.get(url)
      abortController?.abort()
      this.pendingMap.delete(url)
      config.signal = undefined
    }
  }

  cancelAllRequests() {
    this.pendingMap.forEach((cancel) => {
      cancel.abort('form cancel all requests')
    })
    this.pendingMap.clear()
  }

  /**
   * @description: 重置
   */
  reset(): void {
    this.pendingMap = new Map<string, AbortController>()
  }
}
