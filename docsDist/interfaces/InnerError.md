[nice-axios](../README.md) / [Exports](../modules.md) / InnerError

# Interface: InnerError

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [code](InnerError.md#code)
- [message](InnerError.md#message)
- [response](InnerError.md#response)

## Properties

### code

• **code**: `string` \| `number`

#### Defined in

[src/types.ts:36](https://github.com/sixdjango/nice-axios/blob/1789957/src/types.ts#L36)

___

### message

• **message**: `string`

#### Defined in

[src/types.ts:37](https://github.com/sixdjango/nice-axios/blob/1789957/src/types.ts#L37)

___

### response

• `Optional` **response**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data?` | \{ `[key: string]`: `any`; `message`: `string`  } |
| `data.message` | `string` |
| `status` | `number` |

#### Defined in

[src/types.ts:38](https://github.com/sixdjango/nice-axios/blob/1789957/src/types.ts#L38)
