import { isArray } from 'lodash-es'
import { ajax } from './core'
import type {
  AjaxAgent,
  AjaxConfig,
  AjaxConfigMeta,
  AjaxPluginConfig,
  ComplexObject,
  ComposeResult,
} from './types'
import {
  AjaxMethods,
} from './types'

export class AjaxContainer {
  private $agent: AjaxAgent

  constructor(plugins: AjaxPluginConfig[] = []) {
    this.$agent = ajax(plugins)
  }

  send<T>(option: AjaxConfig = {}, plugins: AjaxPluginConfig[]): Promise<T> {
    const { data, body, ...reset } = option
    return this.$agent
      .attach(list => (plugins.length ? list.concat(plugins) : list))
      .then(v => v.exec({ ...reset, data: body || data })) as Promise<T>
  }

  get<T>(url: string, option: AjaxConfig = {}, ...plugins: AjaxPluginConfig[]) {
    return this.send<T>({ ...option, method: AjaxMethods.GET, url }, plugins)
  }

  delete<T>(url: string, option: AjaxConfig = {}, ...plugins: AjaxPluginConfig[]) {
    return this.send<T>({ ...option, method: AjaxMethods.DELETE, url }, plugins)
  }

  put<T>(url: string, option: AjaxConfig = {}, ...plugins: AjaxPluginConfig[]) {
    return this.send<T>({ ...option, method: AjaxMethods.PUT, url }, plugins)
  }

  post<T>(
    url: string,
    option: AjaxConfig = {},
    ...plugins: AjaxPluginConfig[]
  ) {
    return this.send<T>({ ...option, method: AjaxMethods.POST, url }, plugins)
  }

  upload<T>(url: string, data: ComplexObject = {}, meta: AjaxConfigMeta = {}) {
    return this.post<T>(url, {
      data,
      meta: { upload: true, aes: false, ...meta },
    })
  }

  download<T>(
    url: string,
    data: ComplexObject = {},
    meta: AjaxConfigMeta = {},
  ) {
    return this.post<T>(url, {
      responseType: 'blob',
      data,
      meta: { isTransformRequestResult: false, ...meta },
    })
  }

  async attach(
    callback:
    | ((list: AjaxPluginConfig[]) => ComposeResult<AjaxPluginConfig[]>)
    | AjaxPluginConfig[],
  ) {
    if (isArray(callback)) {
      if (callback.length) {
        const v = await this.$agent
          // @ts-ignore
          .attach(list_1 => list_1.concat(callback))
        return (this.$agent = v)
      }
      return Promise.resolve(this.$agent)
    }
    else {
      // @ts-ignore
      const v_1 = await this.$agent.attach(callback)
      return (this.$agent = v_1)
    }
  }

  getAgent() {
    return this.$agent
  }
}
