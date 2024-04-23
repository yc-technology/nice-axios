import type { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from 'axios'
import { AxiosCanceler } from './plugins/ajaxCanceler/axiosCancel'

export { AxiosResponse }

export type ComplexObject = Record<string, any>

export type ComposeResult<T> = T | Promise<T>

export interface ComposePlugin<R, T> {
  (next: (config?: T) => ComposeResult<R>, arg: T): ComposeResult<R>
}

export interface NiceAxiosOptions {
  baseURL?: string
  prefixURL?: string
  name?: string
  afterPluginOption?: NiceAxiosAfterOptions

  /**
   * header key
   * default: Authorization
   */
  headerAuthFieldKey?: string
  /**
   * default: token
   * local storage key
   */
  storageTokenFieldKey?: string

  getToken?: () => Promise<string | undefined> | string | undefined
  defaultMeta?: NiceAxiosConfigMeta
}

export interface BusinessAjaxResult extends ComplexObject {
  code: string | number
  data: unknown
  message: string
}

export interface InnerError {
  code: string | number
  message: string
  response?: {
    status: number
    data?: {
      message: string
      [key: string]: any
    }
    [key: string]: any
  }
  [key: string]: any
}

export interface NiceAxiosAfterOptions {
  /**
   * 成功的指示状态码
   * default: 00000
   */
  successCode?: string | number

  /**
   * 接口返回数据的key
   * default:data
   */
  dataFieldKey?: string

  /**
   * 接口返回状态码的key
   * default: code
   */
  codeFieldKey?: string

  /**
   * 接口返回消息的key
   * default: message
   */
  messageFieldKey?: string

  /**
   * 当接口成功 200 之后的统一回调方法
   * @param res
   * @param config
   * @returns
   */
  onResponseSuccess?: (res: AxiosResponse, config: NiceAxiosConfig) => void

  /**
   * 自定义解包 response.data 的方法
   * @param res
   * @param config
   * @param options
   * @returns
   */
  customUnwrapResponseData?: (
    res: AjaxResponse,
    config: NiceAxiosConfig,
    options?: NiceAxiosAfterOptions
  ) => AjaxResponse

  /**
   * 根据不同的错误码和描述信息执行某些操作，属于业务异常的处理都在这里订阅
   */
  onCatchBusinessError?: Action4<
    string | number,
    string,
    AxiosResponse,
    NiceAxiosConfig | undefined
  >
  /**
   * 根据不同的 HTTP 状态码和描述信息执行某些操作：
   * 额外的特殊状态码，由组件库定义：
   * :timeout => 表示超时
   * :networkError => 表示网络异常
   */
  onCatchAxiosError?: Action2<AxiosError<any>, NiceAxiosConfigMeta | undefined>
}

export interface NiceAxiosConfigMeta extends ComplexObject {
  form?: boolean
  upload?: boolean
  joinPrefix?: boolean
  showErrorTip?: boolean
  // merge request
  merge?: boolean
  mergeTimeout?: number

  /**
   * 是否需要解包 response.data
   * @default true
   * 优先级第二
   */
  isOnlyUnwrapResponseData?: boolean

  /**
   * 返回原始数据
   * @default true
   * 优先级最高
   */
  isOriginalResponse?: boolean

  /**
   * 是否需要添加 token
   */
  isTokenRequired?: boolean

  /**
   * 是否需要 signal
   */
  isSignalRequired?: boolean
}

export interface NiceAxiosConfig extends AxiosRequestConfig {
  url?: string
  method?: Method | string
  meta?: NiceAxiosConfigMeta
  headers?: ComplexObject
  params?: string | ComplexObject | any
  data?: string | ComplexObject | any
  $canceler?: AxiosCanceler
  timestamp?: string
  [key: string]: any
}

export interface AjaxResponse extends ComplexObject {
  data: any
  status: number
  statusText: string
  config: NiceAxiosConfig
  headers: ComplexObject
}

/**
 * 采用 compose 插件模式，对请求进行处理
 * 默认插件顺序是从左到右
 * - 请求前置插件 order 从小到大 [1,2,3,4,5] 越小越先执行
 * - 请求后置插件 order 从大到小 [-1,-2,-3,-4,-5] 越大越先执行
 * ## 执行顺序解释：
 * 1. 设计里面是”洋葱模型理念“，像洋葱一样，请求先从外层插件开始执行，然后依次往内层执行，最后返回结果
 * 2. 核心方法是 `compose`，`compose` 会将所有插件组合成一个函数，然后执行这个函数，这个函数会依次执行所有插件
 * @example
 * ```ts
 * // 插件 1
 * const plugin1: NiceAjaxPlugin = {
 *  desc: '插件1',
 *  order: 1,
 *  executor: async (next, config) => {
 *  // 由于一个请求的生命周期中，config 都是一个对象引用。所以这里修改后会影响之后的 config 的值
 *  config.xx = xx
 *  // 这里可以传新的 config，新的 config 会覆盖原来的 config。注意这里是重新赋值 oldConfig = newConfig
 *  // next 在不断的调用下一个插件的关键
 *  return next(newConfig)
 *  }
 * }
 * ```
 */
export type NiceAjaxExecutor = ComposePlugin<AjaxResponse, NiceAxiosConfig>

export interface NiceAjaxPluginConfig {
  desc: string
  order: number
  executor: NiceAjaxExecutor
}

export type NiceAjaxPlugin = NiceAjaxExecutor | NiceAjaxPluginConfig

export interface AjaxExecutor {
  (config: NiceAxiosConfig): Promise<AjaxResponse>
}

export interface AjaxAgent {
  add(list: NiceAjaxPlugin[]): AjaxAgent
  attach(callback: (list: NiceAjaxPlugin[]) => ComposeResult<NiceAjaxPlugin[]>): Promise<AjaxAgent>
  exec(args: NiceAxiosConfig): Promise<AjaxResponse>
}

export interface TAjaxConfig<TParams, TData> extends NiceAxiosConfig {
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
  (
    arg1: T1,
    arg2: T2,
    arg3: T3,
    arg4: T4,
    arg5: T5,
    arg6: T6,
    arg7: T7,
    arg8: T8,
    arg9: T9
  ): TResult
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
