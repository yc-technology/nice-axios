[nice-axios](../README.md) / [Exports](../modules.md) / AjaxHookInstance

# Class: AjaxHookInstance\<TResult, TParams, TData\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TResult` | `TResult` |
| `TParams` | extends [`ComplexObject`](../modules.md#complexobject) |
| `TData` | extends [`ComplexObject`](../modules.md#complexobject) |

## Implements

- [`AjaxHookInstance`](AjaxHookInstance.md)\<`TResult`, `TParams`, `TData`\>

## Implemented by

- [`AjaxHookInstance`](AjaxHookInstance.md)

## Table of contents

### Constructors

- [constructor](AjaxHookInstance.md#constructor)

### Properties

- [agent](AjaxHookInstance.md#agent)
- [config](AjaxHookInstance.md#config)

### Methods

- [add](AjaxHookInstance.md#add)
- [exec](AjaxHookInstance.md#exec)
- [send](AjaxHookInstance.md#send)
- [sendQuery](AjaxHookInstance.md#sendquery)

## Constructors

### constructor

• **new AjaxHookInstance**\<`TResult`, `TParams`, `TData`\>(`agent`, `config`): [`AjaxHookInstance`](AjaxHookInstance.md)\<`TResult`, `TParams`, `TData`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult` | `TResult` |
| `TParams` | extends [`ComplexObject`](../modules.md#complexobject) |
| `TData` | extends [`ComplexObject`](../modules.md#complexobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | `Promise`\<[`AjaxAgent`](../interfaces/AjaxAgent.md)\> |
| `config` | `string` \| [`TAjaxConfig`](../interfaces/TAjaxConfig.md)\<`TParams`, `TData`\> |

#### Returns

[`AjaxHookInstance`](AjaxHookInstance.md)\<`TResult`, `TParams`, `TData`\>

#### Defined in

[src/hook.ts:6](https://github.com/sixdjango/nice-axios/blob/1789957/src/hook.ts#L6)

## Properties

### agent

• `Private` **agent**: `Promise`\<[`AjaxAgent`](../interfaces/AjaxAgent.md)\>

#### Implementation of

AjaxHookInstance.agent

#### Defined in

[src/hook.ts:6](https://github.com/sixdjango/nice-axios/blob/1789957/src/hook.ts#L6)

___

### config

• `Private` **config**: [`TAjaxConfig`](../interfaces/TAjaxConfig.md)\<`TParams`, `TData`\>

#### Implementation of

AjaxHookInstance.config

#### Defined in

[src/hook.ts:4](https://github.com/sixdjango/nice-axios/blob/1789957/src/hook.ts#L4)

## Methods

### add

▸ **add**(`...plugins`): [`AjaxHookInstance`](AjaxHookInstance.md)\<`TResult`, `TParams`, `TData`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...plugins` | [`AjaxPlugin`](../modules.md#ajaxplugin)[] |

#### Returns

[`AjaxHookInstance`](AjaxHookInstance.md)\<`TResult`, `TParams`, `TData`\>

#### Implementation of

AjaxHookInstance.add

#### Defined in

[src/hook.ts:10](https://github.com/sixdjango/nice-axios/blob/1789957/src/hook.ts#L10)

___

### exec

▸ **exec**(`config?`): `Promise`\<`TResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`TAjaxConfig`](../interfaces/TAjaxConfig.md)\<`TParams`, `TData`\> |

#### Returns

`Promise`\<`TResult`\>

#### Implementation of

AjaxHookInstance.exec

#### Defined in

[src/hook.ts:16](https://github.com/sixdjango/nice-axios/blob/1789957/src/hook.ts#L16)

___

### send

▸ **send**(`data?`): `Promise`\<`TResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.data?` | `TData` |
| `data.params?` | `TParams` |

#### Returns

`Promise`\<`TResult`\>

#### Implementation of

AjaxHookInstance.send

#### Defined in

[src/hook.ts:30](https://github.com/sixdjango/nice-axios/blob/1789957/src/hook.ts#L30)

___

### sendQuery

▸ **sendQuery**(`query?`): `Promise`\<`TResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | `TParams` |

#### Returns

`Promise`\<`TResult`\>

#### Implementation of

AjaxHookInstance.sendQuery

#### Defined in

[src/hook.ts:34](https://github.com/sixdjango/nice-axios/blob/1789957/src/hook.ts#L34)
