[nice-axios](../README.md) / [Exports](../modules.md) / AjaxAgent

# Interface: AjaxAgent

## Table of contents

### Methods

- [add](AjaxAgent.md#add)
- [attach](AjaxAgent.md#attach)
- [exec](AjaxAgent.md#exec)

## Methods

### add

▸ **add**(`list`): [`AjaxAgent`](AjaxAgent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`AjaxPluginConfig`](../modules.md#ajaxpluginconfig)[] |

#### Returns

[`AjaxAgent`](AjaxAgent.md)

#### Defined in

[src/types.ts:119](https://github.com/sixdjango/nice-axios/blob/1789957/src/types.ts#L119)

___

### attach

▸ **attach**(`callback`): `Promise`\<[`AjaxAgent`](AjaxAgent.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`list`: [`AjaxPluginConfig`](../modules.md#ajaxpluginconfig)[]) => [`ComposeResult`](../modules.md#composeresult)\<[`AjaxPluginConfig`](../modules.md#ajaxpluginconfig)[]\> |

#### Returns

`Promise`\<[`AjaxAgent`](AjaxAgent.md)\>

#### Defined in

[src/types.ts:120](https://github.com/sixdjango/nice-axios/blob/1789957/src/types.ts#L120)

___

### exec

▸ **exec**(`args`): `Promise`\<[`AjaxResponse`](AjaxResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`AjaxConfig`](AjaxConfig.md) |

#### Returns

`Promise`\<[`AjaxResponse`](AjaxResponse.md)\>

#### Defined in

[src/types.ts:123](https://github.com/sixdjango/nice-axios/blob/1789957/src/types.ts#L123)
