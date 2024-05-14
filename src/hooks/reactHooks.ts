import { useEffect, useRef } from 'react'
import { NiceAxios, NiceAxiosConfig } from '..'

export function useNiceAxiosCancelAllRequestsReactHook(instance: NiceAxios) {
  useEffect(() => {
    return () => {
      // 取消所有请求
      instance.$canceler.cancelAllRequests()
    }
  }, [])
}

export function useAbortRequestReactHook<T = any, R = any>(
  fn: (arg: T, config?: NiceAxiosConfig) => Promise<R>
) {
  const controllers = useRef<AbortController[]>([])
  const currentController = useRef<AbortController>()

  const handler = async (arg: T, config?: NiceAxiosConfig): Promise<R> => {
    const controller = new AbortController()
    controllers.current.push(controller)
    const promise = fn(arg, { ...config, signal: controller.signal }).finally(() => {
      const index = controllers.current.indexOf(controller)
      index > -1 && controllers.current.splice(index, 1)
    })
    return promise
  }

  useEffect(() => {
    return () => {
      // 取消所有的请求
      controllers.current.forEach((controller) => {
        controller.abort()
      })
    }
  }, [])

  function cancelAll() {
    controllers.current.forEach((controller) => {
      controller.abort()
    })
    controllers.current.length = 0
  }

  function cancel() {
    currentController.current?.abort()
  }

  return { handler, controllers, currentController, cancel, cancelAll }
}
