import { NiceAxios } from '..'
import type React from 'react'

let useEffect: (effect: React.EffectCallback, deps?: React.DependencyList | undefined) => void
  // 通过动态导入 React 来检查是否安装了 React
;(async () => {
  try {
    const react = require('react')
    useEffect = react.useEffect
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
