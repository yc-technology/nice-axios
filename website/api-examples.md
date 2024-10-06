---
outline: deep
---

# API Examples

This page introduces some important APIs and configuration of certain attributes.

```js{4}
const niceAxios = createNiceAxios(options,plugins)
const res = await niceAxios.get<AxiosResponse<string>>(
    'https://httpd.apache.org/',
    config,
    )
```

## Axios Options

```js{4}
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
```

### NiceAxiosConfigMeta

```js{4}
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
```

### NiceAxiosAfterOptions

```js{4}
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
```

## NiceAxiosConfig

```js{4}
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
```

## More

For more usage of Axios, please visit the official [Axios](https://vitepress.dev/reference/runtime-api#usedata) website.
