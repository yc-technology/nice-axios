import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { isFunction } from 'lodash-es'
import type { AjaxAgent, AjaxConfig, AjaxExecutor, AjaxPluginConfig, AjaxResponse, ComposeResult } from './types'
import { compose } from './utils/compose'

// @ts-ignore
const getOrder = (plugin: AjaxPluginConfig) => (isFunction(plugin) ? 0 : plugin.order)

export const fetch = (defaultAction: AjaxExecutor, plugins: AjaxPluginConfig[]): AjaxAgent => {
  let cachedExecutor: (config: AjaxConfig) => ComposeResult<AjaxResponse>
  return {
    add(list) {
      if (!list.length) return this

      return fetch(defaultAction, plugins.concat(list))
    },
    attach(callback) {
      const newPlugins = new Promise<AjaxPluginConfig[]>((resolve, reject) => {
        try {
          resolve(callback(plugins))
        } catch (e) {
          reject(e)
        }
      })
      return newPlugins.then((list) => fetch(defaultAction, list))
    },
    exec(args) {
      if (!cachedExecutor) {
        const list = plugins.concat([])
        // 注意这里一定要用稳定排序：JS 自带的 sort 方法就是稳定排序，但早期 IE 不是
        list.sort((x, y) => getOrder(x) - getOrder(y))
        // @ts-ignore
        const data = list.map((v) => (isFunction(v) ? v : v.executor))

        cachedExecutor = compose(defaultAction, ...data).exec
      }

      return new Promise<AjaxResponse>((resolve, reject) => {
        try {
          resolve(cachedExecutor(args))
        } catch (e) {
          reject(e)
        }
      })
    },
  }
}

export const ajax = (plugins: AjaxPluginConfig[]): AjaxAgent =>
  fetch((config) => axios(config as AxiosRequestConfig).then((v) => ({ ...v, config }) as AjaxResponse), plugins)
