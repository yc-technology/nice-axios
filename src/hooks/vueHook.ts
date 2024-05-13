import type { ComponentInternalInstance } from 'vue'
import { NiceAxios, NiceAxiosConfig } from '..'

let onUnMounted: (
    hook: () => any,
    target?: ComponentInternalInstance | null | undefined
  ) => false | Function | undefined

  // 通过动态导入 Vue 来检查是否安装了 Vue
;(async () => {
  try {
    const vue = require('vue')
    onUnMounted = vue.onUnmounted
    // 使用 vue
  } catch (error) {
    //   console.error('Vue is not installed.');
    // 处理错误或提供备用逻辑
  }
})()

/**
 * @description: 在 vue 组件销毁时取消所有的请求
 * @tip
 * 1. 请确保在 vue 的hook 环境中使用，目前只支持 vue3
 * 2. 这将会取消所有通过 instance 发出的请求, 确保不需要取消的请求加上 ignoreCancel 属性
 * @param instance
 */
export function useNiceAxiosCancelAllRequestsVueHook(instance: NiceAxios) {
  onUnMounted(() => {
    // 取消所有的请求
    instance.$canceler.cancelAllRequests()
  })
}

export function useAbortRequestVueHook<T = any, R = any>(
  fn: (arg: T, config?: NiceAxiosConfig) => Promise<R>
) {
  const controllers: AbortController[] = []

  const handler = async (arg: T, config?: NiceAxiosConfig): Promise<R> => {
    const controller = new AbortController()
    controllers.push(controller)
    const promise = fn(arg, { ...config, signal: controller.signal }).finally(() => {
      const index = controllers.indexOf(controller)
      index > -1 && controllers.splice(index, 1)
    })
    return promise
  }
  onUnMounted(() => {
    // 取消所有的请求
    controllers.forEach((controller) => {
      controller.abort()
    })
  })

  function clear() {
    controllers.forEach((controller) => {
      controller.abort()
    })
    controllers.length = 0
  }

  return { handler, controllers, clear }
}
