[nice-axios](../README.md) / [Exports](../modules.md) / TAjaxConfig

# Interface: TAjaxConfig\<TParams, TData\>

## Type parameters

| Name |
| :------ |
| `TParams` |
| `TData` |

## Hierarchy

- [`AjaxConfig`](AjaxConfig.md)

  ↳ **`TAjaxConfig`**

## Table of contents

### Properties

- [adapter](TAjaxConfig.md#adapter)
- [auth](TAjaxConfig.md#auth)
- [baseURL](TAjaxConfig.md#baseurl)
- [beforeRedirect](TAjaxConfig.md#beforeredirect)
- [cancelToken](TAjaxConfig.md#canceltoken)
- [data](TAjaxConfig.md#data)
- [decompress](TAjaxConfig.md#decompress)
- [env](TAjaxConfig.md#env)
- [formSerializer](TAjaxConfig.md#formserializer)
- [headers](TAjaxConfig.md#headers)
- [httpAgent](TAjaxConfig.md#httpagent)
- [httpsAgent](TAjaxConfig.md#httpsagent)
- [insecureHTTPParser](TAjaxConfig.md#insecurehttpparser)
- [maxBodyLength](TAjaxConfig.md#maxbodylength)
- [maxContentLength](TAjaxConfig.md#maxcontentlength)
- [maxRate](TAjaxConfig.md#maxrate)
- [maxRedirects](TAjaxConfig.md#maxredirects)
- [meta](TAjaxConfig.md#meta)
- [method](TAjaxConfig.md#method)
- [onDownloadProgress](TAjaxConfig.md#ondownloadprogress)
- [onUploadProgress](TAjaxConfig.md#onuploadprogress)
- [params](TAjaxConfig.md#params)
- [paramsSerializer](TAjaxConfig.md#paramsserializer)
- [proxy](TAjaxConfig.md#proxy)
- [responseEncoding](TAjaxConfig.md#responseencoding)
- [responseType](TAjaxConfig.md#responsetype)
- [signal](TAjaxConfig.md#signal)
- [socketPath](TAjaxConfig.md#socketpath)
- [timeout](TAjaxConfig.md#timeout)
- [timeoutErrorMessage](TAjaxConfig.md#timeouterrormessage)
- [transformRequest](TAjaxConfig.md#transformrequest)
- [transformResponse](TAjaxConfig.md#transformresponse)
- [transitional](TAjaxConfig.md#transitional)
- [url](TAjaxConfig.md#url)
- [validateStatus](TAjaxConfig.md#validatestatus)
- [withCredentials](TAjaxConfig.md#withcredentials)
- [xsrfCookieName](TAjaxConfig.md#xsrfcookiename)
- [xsrfHeaderName](TAjaxConfig.md#xsrfheadername)

## Properties

### adapter

• `Optional` **adapter**: `AxiosAdapterConfig` \| `AxiosAdapterConfig`[]

#### Inherited from

[AjaxConfig](AjaxConfig.md).[adapter](AjaxConfig.md#adapter)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:319

___

### auth

• `Optional` **auth**: `AxiosBasicCredentials`

#### Inherited from

[AjaxConfig](AjaxConfig.md).[auth](AjaxConfig.md#auth)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:320

___

### baseURL

• `Optional` **baseURL**: `string`

#### Inherited from

[AjaxConfig](AjaxConfig.md).[baseURL](AjaxConfig.md#baseurl)

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

[AjaxConfig](AjaxConfig.md).[beforeRedirect](AjaxConfig.md#beforeredirect)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:332

___

### cancelToken

• `Optional` **cancelToken**: `CancelToken`

#### Inherited from

[AjaxConfig](AjaxConfig.md).[cancelToken](AjaxConfig.md#canceltoken)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:337

___

### data

• `Optional` **data**: `TData`

#### Overrides

[AjaxConfig](AjaxConfig.md).[data](AjaxConfig.md#data)

#### Defined in

[src/types.ts:128](https://github.com/sixdjango/nice-axios/blob/1789957/src/types.ts#L128)

___

### decompress

• `Optional` **decompress**: `boolean`

#### Inherited from

[AjaxConfig](AjaxConfig.md).[decompress](AjaxConfig.md#decompress)

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

[AjaxConfig](AjaxConfig.md).[env](AjaxConfig.md#env)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:342

___

### formSerializer

• `Optional` **formSerializer**: `FormSerializerOptions`

#### Inherited from

[AjaxConfig](AjaxConfig.md).[formSerializer](AjaxConfig.md#formserializer)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:345

___

### headers

• `Optional` **headers**: [`ComplexObject`](../modules.md#complexobject)

#### Inherited from

[AjaxConfig](AjaxConfig.md).[headers](AjaxConfig.md#headers)

#### Defined in

[src/types.ts:90](https://github.com/sixdjango/nice-axios/blob/1789957/src/types.ts#L90)

___

### httpAgent

• `Optional` **httpAgent**: `any`

#### Inherited from

[AjaxConfig](AjaxConfig.md).[httpAgent](AjaxConfig.md#httpagent)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:334

___

### httpsAgent

• `Optional` **httpsAgent**: `any`

#### Inherited from

[AjaxConfig](AjaxConfig.md).[httpsAgent](AjaxConfig.md#httpsagent)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:335

___

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

#### Inherited from

[AjaxConfig](AjaxConfig.md).[insecureHTTPParser](AjaxConfig.md#insecurehttpparser)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:341

___

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Inherited from

[AjaxConfig](AjaxConfig.md).[maxBodyLength](AjaxConfig.md#maxbodylength)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:329

___

### maxContentLength

• `Optional` **maxContentLength**: `number`

#### Inherited from

[AjaxConfig](AjaxConfig.md).[maxContentLength](AjaxConfig.md#maxcontentlength)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:327

___

### maxRate

• `Optional` **maxRate**: `number` \| [`number`, `number`]

#### Inherited from

[AjaxConfig](AjaxConfig.md).[maxRate](AjaxConfig.md#maxrate)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:331

___

### maxRedirects

• `Optional` **maxRedirects**: `number`

#### Inherited from

[AjaxConfig](AjaxConfig.md).[maxRedirects](AjaxConfig.md#maxredirects)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:330

___

### meta

• `Optional` **meta**: [`AjaxConfigMeta`](AjaxConfigMeta.md)

#### Inherited from

[AjaxConfig](AjaxConfig.md).[meta](AjaxConfig.md#meta)

#### Defined in

[src/types.ts:89](https://github.com/sixdjango/nice-axios/blob/1789957/src/types.ts#L89)

___

### method

• `Optional` **method**: [`AjaxMethods`](../enums/AjaxMethods.md)

#### Inherited from

[AjaxConfig](AjaxConfig.md).[method](AjaxConfig.md#method)

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

[AjaxConfig](AjaxConfig.md).[onDownloadProgress](AjaxConfig.md#ondownloadprogress)

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

[AjaxConfig](AjaxConfig.md).[onUploadProgress](AjaxConfig.md#onuploadprogress)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:325

___

### params

• `Optional` **params**: `TParams`

#### Overrides

[AjaxConfig](AjaxConfig.md).[params](AjaxConfig.md#params)

#### Defined in

[src/types.ts:127](https://github.com/sixdjango/nice-axios/blob/1789957/src/types.ts#L127)

___

### paramsSerializer

• `Optional` **paramsSerializer**: `ParamsSerializerOptions`

#### Inherited from

[AjaxConfig](AjaxConfig.md).[paramsSerializer](AjaxConfig.md#paramsserializer)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:314

___

### proxy

• `Optional` **proxy**: ``false`` \| `AxiosProxyConfig`

#### Inherited from

[AjaxConfig](AjaxConfig.md).[proxy](AjaxConfig.md#proxy)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:336

___

### responseEncoding

• `Optional` **responseEncoding**: `string`

#### Inherited from

[AjaxConfig](AjaxConfig.md).[responseEncoding](AjaxConfig.md#responseencoding)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:322

___

### responseType

• `Optional` **responseType**: `ResponseType`

#### Inherited from

[AjaxConfig](AjaxConfig.md).[responseType](AjaxConfig.md#responsetype)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:321

___

### signal

• `Optional` **signal**: `GenericAbortSignal`

#### Inherited from

[AjaxConfig](AjaxConfig.md).[signal](AjaxConfig.md#signal)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:340

___

### socketPath

• `Optional` **socketPath**: ``null`` \| `string`

#### Inherited from

[AjaxConfig](AjaxConfig.md).[socketPath](AjaxConfig.md#socketpath)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:333

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[AjaxConfig](AjaxConfig.md).[timeout](AjaxConfig.md#timeout)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:316

___

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

#### Inherited from

[AjaxConfig](AjaxConfig.md).[timeoutErrorMessage](AjaxConfig.md#timeouterrormessage)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:317

___

### transformRequest

• `Optional` **transformRequest**: `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

#### Inherited from

[AjaxConfig](AjaxConfig.md).[transformRequest](AjaxConfig.md#transformrequest)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:310

___

### transformResponse

• `Optional` **transformResponse**: `AxiosResponseTransformer` \| `AxiosResponseTransformer`[]

#### Inherited from

[AjaxConfig](AjaxConfig.md).[transformResponse](AjaxConfig.md#transformresponse)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:311

___

### transitional

• `Optional` **transitional**: `TransitionalOptions`

#### Inherited from

[AjaxConfig](AjaxConfig.md).[transitional](AjaxConfig.md#transitional)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:339

___

### url

• `Optional` **url**: `string`

#### Inherited from

[AjaxConfig](AjaxConfig.md).[url](AjaxConfig.md#url)

#### Defined in

[src/types.ts:87](https://github.com/sixdjango/nice-axios/blob/1789957/src/types.ts#L87)

___

### validateStatus

• `Optional` **validateStatus**: ``null`` \| (`status`: `number`) => `boolean`

#### Inherited from

[AjaxConfig](AjaxConfig.md).[validateStatus](AjaxConfig.md#validatestatus)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:328

___

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Inherited from

[AjaxConfig](AjaxConfig.md).[withCredentials](AjaxConfig.md#withcredentials)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:318

___

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

#### Inherited from

[AjaxConfig](AjaxConfig.md).[xsrfCookieName](AjaxConfig.md#xsrfcookiename)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:323

___

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

#### Inherited from

[AjaxConfig](AjaxConfig.md).[xsrfHeaderName](AjaxConfig.md#xsrfheadername)

#### Defined in

node_modules/.pnpm/axios@1.3.4/node_modules/axios/index.d.ts:324
