import { expect, test } from 'vitest'
import { NiceAxiosErrorCode } from '~/constants'
import { createNiceAxios } from '~/instance'

test('test cancel', async () => {
  const niceAxios = createNiceAxios({
    afterPluginOption: {
      onCatchAxiosError: (error) => {
        if (typeof error === 'string') {
          expect(error).toBe('')
        } else {
          expect(error.code).toBe(NiceAxiosErrorCode.ERR_CANCELED)
        }
      },
    },
  })
  const abort = new AbortController()
  setTimeout(() => {
    abort.abort()
  }, 10)
  try {
    await niceAxios.get('https://youtube.com/', { signal: abort.signal })
  } catch (error) {
    expect(niceAxios.$canceler.pendingMap.size).toBe(0)
  }

  //   niceAxios.cancelAll()
})
