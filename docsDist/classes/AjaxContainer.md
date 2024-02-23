[nice-axios](../README.md) / [Exports](../modules.md) / AjaxContainer

# Class: AjaxContainer

## Table of contents

### Constructors

- [constructor](AjaxContainer.md#constructor)

### Properties

- [$agent](AjaxContainer.md#$agent)

### Methods

- [attach](AjaxContainer.md#attach)
- [delete](AjaxContainer.md#delete)
- [download](AjaxContainer.md#download)
- [get](AjaxContainer.md#get)
- [getAgent](AjaxContainer.md#getagent)
- [post](AjaxContainer.md#post)
- [put](AjaxContainer.md#put)
- [send](AjaxContainer.md#send)
- [upload](AjaxContainer.md#upload)

## Constructors

### constructor

• **new AjaxContainer**(`plugins?`): [`AjaxContainer`](AjaxContainer.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `plugins` | [`AjaxPluginConfig`](../modules.md#ajaxpluginconfig)[] | `[]` |

#### Returns

[`AjaxContainer`](AjaxContainer.md)

#### Defined in

[src/container.ts:18](https://github.com/sixdjango/nice-axios/blob/1789957/src/container.ts#L18)

## Properties

### $agent

• `Private` **$agent**: [`AjaxAgent`](../interfaces/AjaxAgent.md)

#### Defined in

[src/container.ts:16](https://github.com/sixdjango/nice-axios/blob/1789957/src/container.ts#L16)

## Methods

### attach

▸ **attach**(`callback`): `Promise`\<[`AjaxAgent`](../interfaces/AjaxAgent.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`AjaxPluginConfig`](../modules.md#ajaxpluginconfig)[] \| (`list`: [`AjaxPluginConfig`](../modules.md#ajaxpluginconfig)[]) => [`ComposeResult`](../modules.md#composeresult)\<[`AjaxPluginConfig`](../modules.md#ajaxpluginconfig)[]\> |

#### Returns

`Promise`\<[`AjaxAgent`](../interfaces/AjaxAgent.md)\>

#### Defined in

[src/container.ts:68](https://github.com/sixdjango/nice-axios/blob/1789957/src/container.ts#L68)

___

### delete

▸ **delete**\<`T`\>(`url`, `option?`, `...plugins`): `Promise`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `option` | [`AjaxConfig`](../interfaces/AjaxConfig.md) |
| `...plugins` | [`AjaxPluginConfig`](../modules.md#ajaxpluginconfig)[] |

#### Returns

`Promise`\<`T`\>

#### Defined in

[src/container.ts:33](https://github.com/sixdjango/nice-axios/blob/1789957/src/container.ts#L33)

___

### download

▸ **download**\<`T`\>(`url`, `data?`, `meta?`): `Promise`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data` | [`ComplexObject`](../modules.md#complexobject) |
| `meta` | [`AjaxConfigMeta`](../interfaces/AjaxConfigMeta.md) |

#### Returns

`Promise`\<`T`\>

#### Defined in

[src/container.ts:56](https://github.com/sixdjango/nice-axios/blob/1789957/src/container.ts#L56)

___

### get

▸ **get**\<`T`\>(`url`, `option?`, `...plugins`): `Promise`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `option` | [`AjaxConfig`](../interfaces/AjaxConfig.md) |
| `...plugins` | [`AjaxPluginConfig`](../modules.md#ajaxpluginconfig)[] |

#### Returns

`Promise`\<`T`\>

#### Defined in

[src/container.ts:29](https://github.com/sixdjango/nice-axios/blob/1789957/src/container.ts#L29)

___

### getAgent

▸ **getAgent**(): [`AjaxAgent`](../interfaces/AjaxAgent.md)

#### Returns

[`AjaxAgent`](../interfaces/AjaxAgent.md)

#### Defined in

[src/container.ts:89](https://github.com/sixdjango/nice-axios/blob/1789957/src/container.ts#L89)

___

### post

▸ **post**\<`T`\>(`url`, `option?`, `...plugins`): `Promise`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `option` | [`AjaxConfig`](../interfaces/AjaxConfig.md) |
| `...plugins` | [`AjaxPluginConfig`](../modules.md#ajaxpluginconfig)[] |

#### Returns

`Promise`\<`T`\>

#### Defined in

[src/container.ts:41](https://github.com/sixdjango/nice-axios/blob/1789957/src/container.ts#L41)

___

### put

▸ **put**\<`T`\>(`url`, `option?`, `...plugins`): `Promise`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `option` | [`AjaxConfig`](../interfaces/AjaxConfig.md) |
| `...plugins` | [`AjaxPluginConfig`](../modules.md#ajaxpluginconfig)[] |

#### Returns

`Promise`\<`T`\>

#### Defined in

[src/container.ts:37](https://github.com/sixdjango/nice-axios/blob/1789957/src/container.ts#L37)

___

### send

▸ **send**\<`T`\>(`option?`, `plugins`): `Promise`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | [`AjaxConfig`](../interfaces/AjaxConfig.md) |
| `plugins` | [`AjaxPluginConfig`](../modules.md#ajaxpluginconfig)[] |

#### Returns

`Promise`\<`T`\>

#### Defined in

[src/container.ts:22](https://github.com/sixdjango/nice-axios/blob/1789957/src/container.ts#L22)

___

### upload

▸ **upload**\<`T`\>(`url`, `data?`, `meta?`): `Promise`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data` | [`ComplexObject`](../modules.md#complexobject) |
| `meta` | [`AjaxConfigMeta`](../interfaces/AjaxConfigMeta.md) |

#### Returns

`Promise`\<`T`\>

#### Defined in

[src/container.ts:49](https://github.com/sixdjango/nice-axios/blob/1789957/src/container.ts#L49)
