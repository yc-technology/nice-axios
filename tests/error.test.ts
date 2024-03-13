import { AxiosError } from 'axios'
import { test, expect } from 'vitest'
import { createNiceAxios } from '~/instance'

test('test error', async () => {
  const niceAxios = createNiceAxios({
    defaultMeta: {
      disableRespProcessing: false,
    },

    afterPluginOption: {},
  })

  try {
    await niceAxios.get('https://baidu.com/')
  } catch (error) {
    const e = error as AxiosError
    expect(e.code).toBe(AxiosError.ERR_BAD_RESPONSE)
  }
})
