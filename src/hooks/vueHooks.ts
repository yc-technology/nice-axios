import { onUnmounted, ref } from 'vue'
import { NiceAxios, NiceAxiosConfig } from '..'
/**
 * @description: 在 vue 组件销毁时取消所有的请求
 * @tip
 * 1. 请确保在 vue 的hook 环境中使用，目前只支持 vue3
 * 2. 这将会取消所有通过 instance 发出的请求, 确保不需要取消的请求加上 ignoreCancel 属性
 * @param instance
 */
export function useNiceAxiosCancelAllRequestsVueHook(instance: NiceAxios) {
  onUnmounted(() => {
    // 取消所有的请求
    instance.$canceler.cancelAllRequests()
  })
}

export function useAbortRequestVueHook<T = any, R = any>(
  fn: (arg: T, config?: NiceAxiosConfig) => Promise<R>
) {
  const controllers: AbortController[] = []
  const currentController = ref<AbortController>()

  const handler = async (arg: T, config?: NiceAxiosConfig): Promise<R> => {
    const controller = new AbortController()
    currentController.value = controller
    controllers.push(controller)
    const promise = fn(arg, { ...config, signal: controller.signal }).finally(() => {
      const index = controllers.indexOf(controller)
      index > -1 && controllers.splice(index, 1)
    })
    return promise
  }
  onUnmounted(() => {
    // 取消所有的请求
    controllers.forEach((controller) => {
      controller.abort()
    })
  })

  function cancel() {
    currentController.value?.abort()
  }

  function cancelAll() {
    controllers.forEach((controller) => {
      controller.abort()
    })
    controllers.length = 0
  }

  return { handler, controllers, cancel, cancelAll }
}
