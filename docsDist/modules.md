[nice-axios](README.md) / Exports

# nice-axios

## Table of contents

### Enumerations

- [AjaxMethods](enums/AjaxMethods.md)
- [ContentTypeEnum](enums/ContentTypeEnum.md)

### Classes

- [AjaxContainer](classes/AjaxContainer.md)
- [AjaxHookInstance](classes/AjaxHookInstance.md)

### Interfaces

- [Action](interfaces/Action.md)
- [Action1](interfaces/Action1.md)
- [Action2](interfaces/Action2.md)
- [Action3](interfaces/Action3.md)
- [Action4](interfaces/Action4.md)
- [Action5](interfaces/Action5.md)
- [Action6](interfaces/Action6.md)
- [Action7](interfaces/Action7.md)
- [Action8](interfaces/Action8.md)
- [Action9](interfaces/Action9.md)
- [AjaxAfterOptions](interfaces/AjaxAfterOptions.md)
- [AjaxAgent](interfaces/AjaxAgent.md)
- [AjaxBeforeOptions](interfaces/AjaxBeforeOptions.md)
- [AjaxConfig](interfaces/AjaxConfig.md)
- [AjaxConfigMeta](interfaces/AjaxConfigMeta.md)
- [AjaxExecutor](interfaces/AjaxExecutor.md)
- [AjaxPluginFullConfig](interfaces/AjaxPluginFullConfig.md)
- [AjaxResponse](interfaces/AjaxResponse.md)
- [BusinessAjaxResult](interfaces/BusinessAjaxResult.md)
- [ComposePlugin](interfaces/ComposePlugin.md)
- [Fun8c](interfaces/Fun8c.md)
- [Func](interfaces/Func.md)
- [Func1](interfaces/Func1.md)
- [Func2](interfaces/Func2.md)
- [Func3](interfaces/Func3.md)
- [Func4](interfaces/Func4.md)
- [Func5](interfaces/Func5.md)
- [Func6](interfaces/Func6.md)
- [Func7](interfaces/Func7.md)
- [Func9](interfaces/Func9.md)
- [InnerError](interfaces/InnerError.md)
- [NiceAxiosOptions](interfaces/NiceAxiosOptions.md)
- [TAjaxConfig](interfaces/TAjaxConfig.md)
- [Tuple1](interfaces/Tuple1.md)
- [Tuple2](interfaces/Tuple2.md)
- [Tuple3](interfaces/Tuple3.md)
- [Tuple4](interfaces/Tuple4.md)
- [Tuple5](interfaces/Tuple5.md)
- [Tuple6](interfaces/Tuple6.md)
- [Tuple7](interfaces/Tuple7.md)

### Type Aliases

- [AjaxPlugin](modules.md#ajaxplugin)
- [AjaxPluginConfig](modules.md#ajaxpluginconfig)
- [BuildBeforePlugin](modules.md#buildbeforeplugin)
- [ComplexObject](modules.md#complexobject)
- [ComposeResult](modules.md#composeresult)

### Variables

- [errorResult](modules.md#errorresult)
- [errorResultNull](modules.md#errorresultnull)

### Functions

- [addCancelerPlugin](modules.md#addcancelerplugin)
- [ajax](modules.md#ajax)
- [buildAfterPlugin](modules.md#buildafterplugin)
- [buildBeforePlugin](modules.md#buildbeforeplugin-1)
- [cancelAllAjax](modules.md#cancelallajax)
- [createNiceAxios](modules.md#createniceaxios)
- [fetch](modules.md#fetch)
- [getNiceAxiosInstance](modules.md#getniceaxiosinstance)
- [removeCancelerPlugin](modules.md#removecancelerplugin)

## Type Aliases

### AjaxPlugin

Ƭ **AjaxPlugin**: [`ComposePlugin`](interfaces/ComposePlugin.md)\<[`AjaxResponse`](interfaces/AjaxResponse.md), [`AjaxConfig`](interfaces/AjaxConfig.md)\>

#### Defined in

[src/types.ts:104](https://github.com/sixdjango/nice-axios/blob/1789957/src/types.ts#L104)

___

### AjaxPluginConfig

Ƭ **AjaxPluginConfig**: [`AjaxPlugin`](modules.md#ajaxplugin) \| [`AjaxPluginFullConfig`](interfaces/AjaxPluginFullConfig.md)

#### Defined in

[src/types.ts:112](https://github.com/sixdjango/nice-axios/blob/1789957/src/types.ts#L112)

___

### BuildBeforePlugin

Ƭ **BuildBeforePlugin**: [`Func1`](interfaces/Func1.md)\<[`AjaxBeforeOptions`](interfaces/AjaxBeforeOptions.md), [`ComposePlugin`](interfaces/ComposePlugin.md)\<[`AjaxResponse`](interfaces/AjaxResponse.md), [`AjaxConfig`](interfaces/AjaxConfig.md)\>\>

#### Defined in

[src/plugins/defaultBeforePlugin.ts:14](https://github.com/sixdjango/nice-axios/blob/1789957/src/plugins/defaultBeforePlugin.ts#L14)

___

### ComplexObject

Ƭ **ComplexObject**: `Record`\<`string`, `any`\>

#### Defined in

[src/types.ts:13](https://github.com/sixdjango/nice-axios/blob/1789957/src/types.ts#L13)

___

### ComposeResult

Ƭ **ComposeResult**\<`T`\>: `T` \| `Promise`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types.ts:15](https://github.com/sixdjango/nice-axios/blob/1789957/src/types.ts#L15)

## Variables

### errorResult

• `Const` **errorResult**: ``"__ERROR_RESULT__"``

#### Defined in

[src/plugins/constants.ts:13](https://github.com/sixdjango/nice-axios/blob/1789957/src/plugins/constants.ts#L13)

___

### errorResultNull

• `Const` **errorResultNull**: ``"__ERROR_RESULT_NULL__"``

#### Defined in

[src/plugins/constants.ts:15](https://github.com/sixdjango/nice-axios/blob/1789957/src/plugins/constants.ts#L15)

## Functions

### addCancelerPlugin

▸ **addCancelerPlugin**(`next`, `arg`): [`ComposeResult`](modules.md#composeresult)\<[`AjaxResponse`](interfaces/AjaxResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `next` | (`config?`: [`AjaxConfig`](interfaces/AjaxConfig.md)) => [`ComposeResult`](modules.md#composeresult)\<[`AjaxResponse`](interfaces/AjaxResponse.md)\> |
| `arg` | [`AjaxConfig`](interfaces/AjaxConfig.md) |

#### Returns

[`ComposeResult`](modules.md#composeresult)\<[`AjaxResponse`](interfaces/AjaxResponse.md)\>

#### Defined in

[src/plugins/ajaxCanceler/index.ts:8](https://github.com/sixdjango/nice-axios/blob/1789957/src/plugins/ajaxCanceler/index.ts#L8)

___

### ajax

▸ **ajax**(`plugins`): [`AjaxAgent`](interfaces/AjaxAgent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `plugins` | [`AjaxPluginConfig`](modules.md#ajaxpluginconfig)[] |

#### Returns

[`AjaxAgent`](interfaces/AjaxAgent.md)

#### Defined in

[src/core.ts:50](https://github.com/sixdjango/nice-axios/blob/1789957/src/core.ts#L50)

___

### buildAfterPlugin

▸ **buildAfterPlugin**(`options?`): [`AjaxPlugin`](modules.md#ajaxplugin)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`NiceAxiosOptions`](interfaces/NiceAxiosOptions.md) \| [`Func`](interfaces/Func.md)\<[`NiceAxiosOptions`](interfaces/NiceAxiosOptions.md), []\> |

#### Returns

[`AjaxPlugin`](modules.md#ajaxplugin)

#### Defined in

[src/plugins/defaultAfterPlugin.ts:48](https://github.com/sixdjango/nice-axios/blob/1789957/src/plugins/defaultAfterPlugin.ts#L48)

___

### buildBeforePlugin

▸ **buildBeforePlugin**(`options?`): [`AjaxPlugin`](modules.md#ajaxplugin)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`NiceAxiosOptions`](interfaces/NiceAxiosOptions.md) \| [`Func`](interfaces/Func.md)\<[`NiceAxiosOptions`](interfaces/NiceAxiosOptions.md), []\> |

#### Returns

[`AjaxPlugin`](modules.md#ajaxplugin)

#### Defined in

[src/plugins/defaultBeforePlugin.ts:16](https://github.com/sixdjango/nice-axios/blob/1789957/src/plugins/defaultBeforePlugin.ts#L16)

___

### cancelAllAjax

▸ **cancelAllAjax**(): `void`

#### Returns

`void`

#### Defined in

[src/plugins/ajaxCanceler/index.ts:6](https://github.com/sixdjango/nice-axios/blob/1789957/src/plugins/ajaxCanceler/index.ts#L6)

___

### createNiceAxios

▸ **createNiceAxios**(`customPlugins?`, `options?`): [`AjaxContainer`](classes/AjaxContainer.md)

the plugin's order ,not more than -1000 ~ 1000 range and step length of 20
  // 越小越前面

 // pre plugins
 { desc: '添加当前 Ajax 请求的手动取消功能：应该在所有插件中的第一个', order: -1040, executor: addCancelerPlugin },
 { desc: '合并请求', order: -1020, executor: mergeRequestPlugin },
 {
   desc: '基础业务前置插件',
   order: -1000,
   executor: buildBeforePlugin,
 },

 // order 越大，越早被执行
 // post plugins
 { desc: '通用后置逻辑', order: 1000, executor: buildAfterPlugin },
 { desc: '移除当前请求的手动取消功能：应该在所有插件中的最后一个', order: 0, executor: removeCancelerPlugin },

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `customPlugins` | [`AjaxPluginFullConfig`](interfaces/AjaxPluginFullConfig.md)[] | `[]` |
| `options?` | [`NiceAxiosOptions`](interfaces/NiceAxiosOptions.md) \| [`Func`](interfaces/Func.md)\<[`NiceAxiosOptions`](interfaces/NiceAxiosOptions.md), []\> | `undefined` |

#### Returns

[`AjaxContainer`](classes/AjaxContainer.md)

#### Defined in

[src/instance.ts:53](https://github.com/sixdjango/nice-axios/blob/1789957/src/instance.ts#L53)

___

### fetch

▸ **fetch**(`defaultAction`, `plugins`): [`AjaxAgent`](interfaces/AjaxAgent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultAction` | [`AjaxExecutor`](interfaces/AjaxExecutor.md) |
| `plugins` | [`AjaxPluginConfig`](modules.md#ajaxpluginconfig)[] |

#### Returns

[`AjaxAgent`](interfaces/AjaxAgent.md)

#### Defined in

[src/core.ts:10](https://github.com/sixdjango/nice-axios/blob/1789957/src/core.ts#L10)

___

### getNiceAxiosInstance

▸ **getNiceAxiosInstance**(`customPlugins?`, `options?`): [`AjaxContainer`](classes/AjaxContainer.md)

get nice_axios instance

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `customPlugins` | [`AjaxPluginFullConfig`](interfaces/AjaxPluginFullConfig.md)[] | `[]` |
| `options?` | [`NiceAxiosOptions`](interfaces/NiceAxiosOptions.md) \| [`Func`](interfaces/Func.md)\<[`NiceAxiosOptions`](interfaces/NiceAxiosOptions.md), []\> | `undefined` |

#### Returns

[`AjaxContainer`](classes/AjaxContainer.md)

#### Defined in

[src/instance.ts:62](https://github.com/sixdjango/nice-axios/blob/1789957/src/instance.ts#L62)

___

### removeCancelerPlugin

▸ **removeCancelerPlugin**(`next`, `arg`): [`ComposeResult`](modules.md#composeresult)\<[`AjaxResponse`](interfaces/AjaxResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `next` | (`config?`: [`AjaxConfig`](interfaces/AjaxConfig.md)) => [`ComposeResult`](modules.md#composeresult)\<[`AjaxResponse`](interfaces/AjaxResponse.md)\> |
| `arg` | [`AjaxConfig`](interfaces/AjaxConfig.md) |

#### Returns

[`ComposeResult`](modules.md#composeresult)\<[`AjaxResponse`](interfaces/AjaxResponse.md)\>

#### Defined in

[src/plugins/ajaxCanceler/index.ts:23](https://github.com/sixdjango/nice-axios/blob/1789957/src/plugins/ajaxCanceler/index.ts#L23)
