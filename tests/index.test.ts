import { AxiosResponse } from 'axios'
import { expect, test } from 'vitest'
import { createNiceAxios } from '~/instance'
import { AjaxPlugin, AjaxPluginFullConfig, ComposePlugin } from '~/types'
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
  const addTokenPlugin: AjaxPlugin = async (next, config) => {
    // Execute before request
    const token = 'test-token'
    if (config?.headers) {
      config.headers['xxx-TOKEN'] = token
    }

    return next(config).then((result: AxiosResponse) => {
      // Execute after request
      return result
    })
  }

  const plugins: AjaxPluginFullConfig[] = [
    // generate plugin instance
    {
      // When the value is approximately small, the observer will be executed earlier before the request. On the contrary, the larger the value, the earlier the observer will be executed after the request.
      order: -100,
      executor: addTokenPlugin,
      desc: 'add token',
    },
  ]

  const niceAxios = createNiceAxios(plugins)
  const res = await niceAxios.get<AxiosResponse<string>>('https://httpd.apache.org/', {
    // meta: { allReturn: true },
  })
  expect(typeof res.data === 'string').toBe(true)
  expect(res.config.headers['xxx-TOKEN']).toBe('test-token')
})
