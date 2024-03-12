import { isArray } from 'lodash-es'
import { ajax } from './core'
import type { AjaxAgent, AjaxConfig, AjaxConfigMeta, NiceAjaxPlugin, ComplexObject, ComposeResult } from './types'
import { AxiosResponse } from 'axios'
import { AjaxMethods } from './constants'
import { AxiosCanceler } from './plugins/ajaxCanceler/axiosCancel'

const getOption = (option: AjaxConfig) => {
  for (const k of ['data', 'signal', 'body', 'params', 'headers', 'meta']) {
    if (k in option) {
      return option
    }
  }
  // generate new option
  return { data: option }
}

export class NiceAjaxContainer {
  private $agent: AjaxAgent
  $canceler: AxiosCanceler = new AxiosCanceler()

  constructor(plugins: NiceAjaxPlugin[] = []) {
    this.$agent = ajax(plugins)
  }

  request<T = AxiosResponse>(option: AjaxConfig = {}, plugins: NiceAjaxPlugin[] = []): Promise<T> {
    const { data, body, ...reset } = option
    return this.$agent
      .attach((list) => (plugins.length ? list.concat(plugins) : list))
      .then((v) => v.exec({ ...reset, data: body || data, $canceler: this.$canceler })) as Promise<T>
  }

  get<T = AxiosResponse>(url: string, option: AjaxConfig = {}, ...plugins: NiceAjaxPlugin[]) {
    return this.request<T>({ ...getOption(option), method: AjaxMethods.GET, url }, plugins)
  }

  delete<T = AxiosResponse>(url: string, option: AjaxConfig = {}, ...plugins: NiceAjaxPlugin[]) {
    return this.request<T>({ ...getOption(option), method: AjaxMethods.DELETE, url }, plugins)
  }

  put<T = AxiosResponse>(url: string, option: AjaxConfig = {}, ...plugins: NiceAjaxPlugin[]) {
    return this.request<T>({ ...getOption(option), method: AjaxMethods.PUT, url }, plugins)
  }

  post<T = AxiosResponse>(url: string, option: AjaxConfig = {}, ...plugins: NiceAjaxPlugin[]) {
    return this.request<T>({ ...getOption(option), method: AjaxMethods.POST, url }, plugins)
  }

  upload<T = AxiosResponse>(url: string, data: ComplexObject = {}, meta: AjaxConfigMeta = {}) {
    return this.post<T>(url, {
      data,
      meta: { upload: true, aes: false, ...meta },
    })
  }

  download<T>(url: string, data: ComplexObject = {}, meta: AjaxConfigMeta = {}) {
    return this.post<T>(url, {
      responseType: 'blob',
      data,
      meta: { isTransformRequestResult: false, ...meta },
    })
  }

  async attach(callback: ((list: NiceAjaxPlugin[]) => ComposeResult<NiceAjaxPlugin[]>) | NiceAjaxPlugin[]) {
    if (isArray(callback)) {
      if (callback.length) {
        // 构建新的插件列表
        const v = await this.$agent.attach((list_1) => list_1.concat(callback))
        // 重新赋值
        return (this.$agent = v)
      }
      return Promise.resolve(this.$agent)
    } else {
      // @ts-ignore
      const v_1 = await this.$agent.attach(callback)
      return (this.$agent = v_1)
    }
  }

  getAgent() {
    return this.$agent
  }

  cancelAll() {
    this.$canceler.removeAllPending()
  }
}
