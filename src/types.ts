import type { AxiosRequestConfig } from 'axios'

export enum AjaxMethods {
  GET = 'GET',
  DELETE = 'DELETE',
  HEAD = 'HEAD',
  OPTIONS = 'OPTIONS',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
}

export type ComplexObject = Record<string, any>

export type ComposeResult<T> = T | Promise<T>

export interface ComposePlugin<R, T> {
  (next: (config?: T) => ComposeResult<R>, arg: T): ComposeResult<R>
}

export interface NiceAxiosOptions {
  baseURL?: string
  prefixURL?: string
  afterPluginOption?: AjaxAfterOptions
}

export interface BusinessAjaxResult extends ComplexObject {
  code: string | number
  data: unknown
  message: string
}

export interface AjaxAfterOptions {
  /**
   * 成功的指示状态码
   * default: 00000
   */
  successCode?: string | number

  /**
   * 接口返回数据的key
   * default:data
   */
  resultKey?: string
  /**
   * 根据不同的错误码和描述信息执行某些操作，属于业务异常的处理都在这里订阅
   */
  checkErrorCode: Action3<string | number, string, BusinessAjaxResult>
  /**
   * 根据不同的 HTTP 状态码和描述信息执行某些操作：
   * 额外的特殊状态码，由组件库定义：
   * :timeout => 表示超时
   * :networkError => 表示网络异常
   */
  checkHttpErrorCode: Action2<string | number, string>
}

export interface AjaxConfigMeta extends ComplexObject {
  form?: boolean
  upload?: boolean
  joinPrefix?: boolean
  isTransformRequestResult?: boolean
  allReturn?: boolean
  // merge request
  merge?: boolean
}

export interface AjaxConfig extends AxiosRequestConfig {
  url?: string
  method?: AjaxMethods
  meta?: AjaxConfigMeta
  headers?: ComplexObject
  params?: string | ComplexObject | any
  data?: string | ComplexObject | any
  [key: string]: any
}

export interface AjaxResponse extends ComplexObject {
  data: any
  status: number
  statusText: string
  config: AjaxConfig
  headers: ComplexObject
}

export type AjaxPlugin = ComposePlugin<AjaxResponse, AjaxConfig>

export interface AjaxPluginFullConfig {
  desc: string
  order: number
  executor: AjaxPlugin
}

export type AjaxPluginConfig = AjaxPlugin | AjaxPluginFullConfig

export interface AjaxExecutor {
  (config: AjaxConfig): Promise<AjaxResponse>
}

export interface AjaxAgent {
  add(list: AjaxPluginConfig[]): AjaxAgent
  attach(
    callback: (list: AjaxPluginConfig[]) => ComposeResult<AjaxPluginConfig[]>
  ): Promise<AjaxAgent>
  exec(args: AjaxConfig): Promise<AjaxResponse>
}

export interface TAjaxConfig<TParams, TData> extends AjaxConfig {
  params?: TParams
  data?: TData
}

export interface Func<TResult, TParameters extends any[] = []> {
  (...args: TParameters): TResult
}

export interface Func1<T, TResult> {
  (arg: T): TResult
}

export interface Func2<T1, T2, TResult> {
  (arg1: T1, arg2: T2): TResult
}

export interface Func3<T1, T2, T3, TResult> {
  (arg1: T1, arg2: T2, arg3: T3): TResult
}

export interface Func4<T1, T2, T3, T4, TResult> {
  (arg1: T1, arg2: T2, arg3: T3, arg4: T4): TResult
}

export interface Func5<T1, T2, T3, T4, T5, TResult> {
  (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): TResult
}

export interface Func6<T1, T2, T3, T4, T5, T6, TResult> {
  (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6): TResult
}

export interface Func7<T1, T2, T3, T4, T5, T6, T7, TResult> {
  (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7): TResult
}

export interface Fun8c<T1, T2, T3, T4, T5, T6, T7, T8, TResult> {
  (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8): TResult
}

export interface Func9<T1, T2, T3, T4, T5, T6, T7, T8, T9, TResult> {
  (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9): TResult
}

export interface Action<TParameters extends any[] = []> {
  (...args: TParameters): void
}

export interface Action1<T> {
  (arg: T): void
}

export interface Action2<T1, T2> {
  (arg1: T1, arg2: T2): void
}

export interface Action3<T1, T2, T3> {
  (arg1: T1, arg2: T2, arg3: T3): void
}

export interface Action4<T1, T2, T3, T4> {
  (arg1: T1, arg2: T2, arg3: T3, arg4: T4): void
}

export interface Action5<T1, T2, T3, T4, T5> {
  (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): void
}

export interface Action6<T1, T2, T3, T4, T5, T6> {
  (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6): void
}

export interface Action7<T1, T2, T3, T4, T5, T6, T7> {
  (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7): void
}

export interface Action8<T1, T2, T3, T4, T5, T6, T7, T8> {
  (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8): void
}

export interface Action9<T1, T2, T3, T4, T5, T6, T7, T8, T9> {
  (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9): void
}

export interface Tuple1<T1> {
  item1: T1
}

export interface Tuple2<T1, T2> {
  item1: T1
  item2: T2
}

export interface Tuple3<T1, T2, T3> {
  item1: T1
  item2: T2
  item3: T3
}

export interface Tuple4<T1, T2, T3, T4> {
  item1: T1
  item2: T2
  item3: T3
  item4: T4
}

export interface Tuple5<T1, T2, T3, T4, T5> {
  item1: T1
  item2: T2
  item3: T3
  item4: T4
  item5: T5
}

export interface Tuple6<T1, T2, T3, T4, T5, T6> {
  item1: T1
  item2: T2
  item3: T3
  item4: T4
  item5: T5
  item6: T6
}

export interface Tuple7<T1, T2, T3, T4, T5, T6, T7> {
  item1: T1
  item2: T2
  item3: T3
  item4: T4
  item5: T5
  item6: T6
  item7: T7
}
