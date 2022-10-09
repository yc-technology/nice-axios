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

    this.get = this.get.bind(this)
    this.post = this.post.bind(this)
    this.send = this.send.bind(this)
    this.attach = this.attach.bind(this)
    this.upload = this.upload.bind(this)
    this.download = this.download.bind(this)
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

  attach(
    callback:
    | ((list: AjaxPluginConfig[]) => ComposeResult<AjaxPluginConfig[]>)
    | AjaxPluginConfig[],
  ) {
    if (isArray(callback)) {
      if (callback.length) {
        return this.$agent
        // @ts-ignore
          .attach(list => list.concat(callback))
          .then(v => (this.$agent = v))
      }
      return Promise.resolve(this.$agent)
    }
    else {
      // @ts-ignore
      return this.$agent.attach(callback).then(v => (this.$agent = v))
    }
  }
}
