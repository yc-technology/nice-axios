[nice-axios](../README.md) / [Exports](../modules.md) / AjaxConfig

# Interface: AjaxConfig

## Hierarchy

- `AxiosRequestConfig`

  ↳ **`AjaxConfig`**

  ↳↳ [`TAjaxConfig`](TAjaxConfig.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [adapter](AjaxConfig.md#adapter)
- [auth](AjaxConfig.md#auth)
- [baseURL](AjaxConfig.md#baseurl)
- [beforeRedirect](AjaxConfig.md#beforeredirect)
- [cancelToken](AjaxConfig.md#canceltoken)
- [data](AjaxConfig.md#data)
- [decompress](AjaxConfig.md#decompress)
- [env](AjaxConfig.md#env)
- [formSerializer](AjaxConfig.md#formserializer)
- [headers](AjaxConfig.md#headers)
- [httpAgent](AjaxConfig.md#httpagent)
- [httpsAgent](AjaxConfig.md#httpsagent)
- [insecureHTTPParser](AjaxConfig.md#insecurehttpparser)
- [maxBodyLength](AjaxConfig.md#maxbodylength)
- [maxContentLength](AjaxConfig.md#maxcontentlength)
- [maxRate](AjaxConfig.md#maxrate)
- [maxRedirects](AjaxConfig.md#maxredirects)
- [meta](AjaxConfig.md#meta)
- [method](AjaxConfig.md#method)
- [onDownloadProgress](AjaxConfig.md#ondownloadprogress)
- [onUploadProgress](AjaxConfig.md#onuploadprogress)
- [params](AjaxConfig.md#params)
- [paramsSerializer](AjaxConfig.md#paramsserializer)
- [proxy](AjaxConfig.md#proxy)
- [responseEncoding](AjaxConfig.md#responseencoding)
- [responseType](AjaxConfig.md#responsetype)
- [signal](AjaxConfig.md#signal)
- [socketPath](AjaxConfig.md#socketpath)
- [timeout](AjaxConfig.md#timeout)
- [timeoutErrorMessage](AjaxConfig.md#timeouterrormessage)
- [transformRequest](AjaxConfig.md#transformrequest)
- [transformResponse](AjaxConfig.md#transformresponse)
- [transitional](AjaxConfig.md#transitional)
- [url](AjaxConfig.md#url)
- [validateStatus](AjaxConfig.md#validatestatus)
- [withCredentials](AjaxConfig.md#withcredentials)
- [xsrfCookieName](AjaxConfig.md#xsrfcookiename)
- [xsrfHeaderName](AjaxConfig.md#xsrfheadername)

## Properties

### adapter

• `Optional` **adapter**: `AxiosAdapterConfig` \| `AxiosAdapterConfig`[]

#### Inherited from

AxiosRequestConfig.adapter

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:319

___

### auth

• `Optional` **auth**: `AxiosBasicCredentials`

#### Inherited from

AxiosRequestConfig.auth

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:320

___

### baseURL

• `Optional` **baseURL**: `string`

#### Inherited from

AxiosRequestConfig.baseURL

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:309

___

### beforeRedirect

• `Optional` **beforeRedirect**: (`options`: `Record`\<`string`, `any`\>, `responseDetails`: \{ `headers`: `Record`\<`string`, `string`\>  }) => `void`

#### Type declaration

▸ (`options`, `responseDetails`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Record`\<`string`, `any`\> |
| `responseDetails` | `Object` |
| `responseDetails.headers` | `Record`\<`string`, `string`\> |

##### Returns

`void`

#### Inherited from

AxiosRequestConfig.beforeRedirect

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:332

___

### cancelToken

• `Optional` **cancelToken**: `CancelToken`

#### Inherited from

AxiosRequestConfig.cancelToken

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:337

___

### data

• `Optional` **data**: `any`

#### Overrides

AxiosRequestConfig.data

#### Defined in

[src/types.ts:92](https://github.com/sixdjango/nice-axios/blob/1789957/src/types.ts#L92)

___

### decompress

• `Optional` **decompress**: `boolean`

#### Inherited from

AxiosRequestConfig.decompress

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:338

___

### env

• `Optional` **env**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `FormData?` | (...`args`: `any`[]) => `object` |

#### Inherited from

AxiosRequestConfig.env

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:342

___

### formSerializer

• `Optional` **formSerializer**: `FormSerializerOptions`

#### Inherited from

AxiosRequestConfig.formSerializer

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:345

___

### headers

• `Optional` **headers**: [`ComplexObject`](../modules.md#complexobject)

#### Overrides

AxiosRequestConfig.headers

#### Defined in

[src/types.ts:90](https://github.com/sixdjango/nice-axios/blob/1789957/src/types.ts#L90)

___

### httpAgent

• `Optional` **httpAgent**: `any`

#### Inherited from

AxiosRequestConfig.httpAgent

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:334

___

### httpsAgent

• `Optional` **httpsAgent**: `any`

#### Inherited from

AxiosRequestConfig.httpsAgent

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:335

___

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

#### Inherited from

AxiosRequestConfig.insecureHTTPParser

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:341

___

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Inherited from

AxiosRequestConfig.maxBodyLength

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:329

___

### maxContentLength

• `Optional` **maxContentLength**: `number`

#### Inherited from

AxiosRequestConfig.maxContentLength

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:327

___

### maxRate

• `Optional` **maxRate**: `number` \| [`number`, `number`]

#### Inherited from

AxiosRequestConfig.maxRate

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:331

___

### maxRedirects

• `Optional` **maxRedirects**: `number`

#### Inherited from

AxiosRequestConfig.maxRedirects

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:330

___

### meta

• `Optional` **meta**: [`AjaxConfigMeta`](AjaxConfigMeta.md)

#### Defined in

[src/types.ts:89](https://github.com/sixdjango/nice-axios/blob/1789957/src/types.ts#L89)

___

### method

• `Optional` **method**: [`AjaxMethods`](../enums/AjaxMethods.md)

#### Overrides

AxiosRequestConfig.method

#### Defined in

[src/types.ts:88](https://github.com/sixdjango/nice-axios/blob/1789957/src/types.ts#L88)

___

### onDownloadProgress

• `Optional` **onDownloadProgress**: (`progressEvent`: `AxiosProgressEvent`) => `void`

#### Type declaration

▸ (`progressEvent`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | `AxiosProgressEvent` |

##### Returns

`void`

#### Inherited from

AxiosRequestConfig.onDownloadProgress

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:326

___

### onUploadProgress

• `Optional` **onUploadProgress**: (`progressEvent`: `AxiosProgressEvent`) => `void`

#### Type declaration

▸ (`progressEvent`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | `AxiosProgressEvent` |

##### Returns

`void`

#### Inherited from

AxiosRequestConfig.onUploadProgress

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:325

___

### params

• `Optional` **params**: `any`

#### Overrides

AxiosRequestConfig.params

#### Defined in

[src/types.ts:91](https://github.com/sixdjango/nice-axios/blob/1789957/src/types.ts#L91)

___

### paramsSerializer

• `Optional` **paramsSerializer**: `ParamsSerializerOptions`

#### Inherited from

AxiosRequestConfig.paramsSerializer

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:314

___

### proxy

• `Optional` **proxy**: ``false`` \| `AxiosProxyConfig`

#### Inherited from

AxiosRequestConfig.proxy

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:336

___

### responseEncoding

• `Optional` **responseEncoding**: `string`

#### Inherited from

AxiosRequestConfig.responseEncoding

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:322

___

### responseType

• `Optional` **responseType**: `ResponseType`

#### Inherited from

AxiosRequestConfig.responseType

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:321

___

### signal

• `Optional` **signal**: `GenericAbortSignal`

#### Inherited from

AxiosRequestConfig.signal

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:340

___

### socketPath

• `Optional` **socketPath**: ``null`` \| `string`

#### Inherited from

AxiosRequestConfig.socketPath

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:333

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

AxiosRequestConfig.timeout

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:316

___

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

#### Inherited from

AxiosRequestConfig.timeoutErrorMessage

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:317

___

### transformRequest

• `Optional` **transformRequest**: `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

#### Inherited from

AxiosRequestConfig.transformRequest

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:310

___

### transformResponse

• `Optional` **transformResponse**: `AxiosResponseTransformer` \| `AxiosResponseTransformer`[]

#### Inherited from

AxiosRequestConfig.transformResponse

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:311

___

### transitional

• `Optional` **transitional**: `TransitionalOptions`

#### Inherited from

AxiosRequestConfig.transitional

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:339

___

### url

• `Optional` **url**: `string`

#### Overrides

AxiosRequestConfig.url

#### Defined in

[src/types.ts:87](https://github.com/sixdjango/nice-axios/blob/1789957/src/types.ts#L87)

___

### validateStatus

• `Optional` **validateStatus**: ``null`` \| (`status`: `number`) => `boolean`

#### Inherited from

AxiosRequestConfig.validateStatus

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:328

___

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Inherited from

AxiosRequestConfig.withCredentials

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:318

___

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

#### Inherited from

AxiosRequestConfig.xsrfCookieName

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:323

___

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

#### Inherited from

AxiosRequestConfig.xsrfHeaderName

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:324
