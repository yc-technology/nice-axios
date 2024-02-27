import { AxiosResponse } from 'axios'
import { expect, test } from 'vitest'
import { createNiceAxios } from '~/instance'
import { ComposePlugin } from '~/types'
import { compose } from '~/utils/compose'

test('test reduce right', () => {
  // 定义转换函数作为插件
  const toUpperCasePlugin: ComposePlugin<string, string> = (next, options) => next(options.toUpperCase())
  const exclaimPlugin: ComposePlugin<string, string> = (next, options) => next(options + '!')

  // 创建compose实例，并应用转换
  const transformText = compose(
    (text) => text, // 默认动作，即初始处理函数
    toUpperCasePlugin,
    exclaimPlugin,
  )

  expect(transformText.exec('hello')).toBe('HELLO!')
})

test('test fetch date', async () => {
  const niceAxios = createNiceAxios()
  const res = await niceAxios.get<AxiosResponse<string>>('https://nextjs.org/', {
    // meta: { allReturn: true },
  })
  expect(typeof res.data === 'string').toBe(true)
})
