import { NiceAxios, NiceAxiosConfig } from '..'
import type React from 'react'

let useEffect: (effect: React.EffectCallback, deps?: React.DependencyList | undefined) => void
let useRef: <T>(initialValue: T) => React.MutableRefObject<T>
  // let useCallback: <T extends (...args: any[]) => any>(callback: T, deps: React.DependencyList) => T
  // 通过动态导入 React 来检查是否安装了 React
;(async () => {
  try {
    const react = require('react')
    useEffect = react.useEffect
    useRef = react.useRef
  } catch (error) {
    //   console.error('Vue is not installed.');
    // 处理错误或提供备用逻辑
  }
})()

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

  function cancel() {
    controllers.current.forEach((controller) => {
      controller.abort()
    })
    controllers.current.length = 0
  }

  return { handler, controllers, cancel }
}
