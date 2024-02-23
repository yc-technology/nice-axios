[nice-axios](../README.md) / [Exports](../modules.md) / AjaxAfterOptions

# Interface: AjaxAfterOptions

## Table of contents

### Properties

- [checkErrorCode](AjaxAfterOptions.md#checkerrorcode)
- [checkHttpErrorCode](AjaxAfterOptions.md#checkhttperrorcode)
- [resultKey](AjaxAfterOptions.md#resultkey)
- [successCode](AjaxAfterOptions.md#successcode)

## Properties

### checkErrorCode

• **checkErrorCode**: [`Action4`](Action4.md)\<`string` \| `number`, `string`, [`BusinessAjaxResult`](BusinessAjaxResult.md), `undefined` \| [`AjaxConfigMeta`](AjaxConfigMeta.md)\>

根据不同的错误码和描述信息执行某些操作，属于业务异常的处理都在这里订阅

#### Defined in

[src/types.ts:64](https://github.com/sixdjango/nice-axios/blob/1789957/src/types.ts#L64)

___

### checkHttpErrorCode

• **checkHttpErrorCode**: [`Action2`](Action2.md)\<`string` \| [`InnerError`](InnerError.md), `undefined` \| [`AjaxConfigMeta`](AjaxConfigMeta.md)\>

根据不同的 HTTP 状态码和描述信息执行某些操作：
额外的特殊状态码，由组件库定义：
:timeout => 表示超时
:networkError => 表示网络异常

#### Defined in

[src/types.ts:71](https://github.com/sixdjango/nice-axios/blob/1789957/src/types.ts#L71)

___

### resultKey

• `Optional` **resultKey**: `string`

接口返回数据的key
default:data

#### Defined in

[src/types.ts:60](https://github.com/sixdjango/nice-axios/blob/1789957/src/types.ts#L60)

___

### successCode

• `Optional` **successCode**: `string` \| `number`

成功的指示状态码
default: 00000

#### Defined in

[src/types.ts:54](https://github.com/sixdjango/nice-axios/blob/1789957/src/types.ts#L54)
