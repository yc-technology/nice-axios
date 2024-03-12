import axios from 'axios'
import type { AxiosRequestConfig, Canceler } from 'axios'

import { isFunction } from 'lodash-es'
import type { AjaxConfig } from '../../types'

export const getPendingUrl = (config: AxiosRequestConfig | AjaxConfig) =>
  [config.url, (config as AjaxConfig).timestamp].join('&')

export class AxiosCanceler {
  // 声明一个 Map 用于存储每个请求的标识 和 取消函数
  pendingMap = new Map<string, Canceler>()
  /**
   * 添加请求
   * @param {Object} config
   */
  addPending(config: AxiosRequestConfig) {
    this.removePending(config)
    const url = getPendingUrl(config)
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken((cancel) => {
        if (!this.pendingMap.has(url)) {
          // 如果 pending 中不存在当前请求，则添加进去
          this.pendingMap.set(url, cancel)
        }
      })
  }

  /**
   * @description: 清空所有pending
   */
  removeAllPending() {
    this.pendingMap.forEach((cancel) => {
      cancel && isFunction(cancel) && cancel('Cancel:')
    })
    this.pendingMap.clear()
  }

  /**
   * 移除请求
   * @param {Object} config
   */
  removePending(config: AxiosRequestConfig) {
    const url = getPendingUrl(config)
    if (this.pendingMap.has(url)) {
      // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
      const cancel = this.pendingMap.get(url)
      cancel && cancel(`Cancel:${url}`)
      this.pendingMap.delete(url)
    }
  }

  /**
   * @description: 重置
   */
  reset(): void {
    this.pendingMap = new Map<string, Canceler>()
  }
}
