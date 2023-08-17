import type { AjaxAgent, AjaxConfig, AjaxPlugin, ComplexObject, TAjaxConfig } from './types'

export class AjaxHookInstance<TResult, TParams extends ComplexObject, TData extends ComplexObject> implements AjaxHookInstance<TResult, TParams, TData> {
  private config: TAjaxConfig<TParams, TData>

  constructor(private agent: Promise<AjaxAgent>, config: TAjaxConfig<TParams, TData> | string) {
    this.config = typeof config === 'string' ? ({ url: config } as TAjaxConfig<TParams, TData>) : config
  }

  add(...plugins: AjaxPlugin[]) {
    const newAgent = this.agent.then(v => v.add(plugins as unknown[] as AjaxPlugin[]))

    return new AjaxHookInstance<TResult, TParams, TData>(newAgent, this.config)
  }

  exec(config?: TAjaxConfig<TParams, TData>) {
    const currentConfig = !config ? ({} as TAjaxConfig<TParams, TData>) : config
    this.config.timestamp = Date.now()
    return this.agent.then((v) => {
      const parameter = {
        ...this.config,
        ...currentConfig,
        params: { ...this.config.params, ...currentConfig.params },
        data: currentConfig.data || {},
      } as AjaxConfig
      return v.exec(parameter)
    }) as Promise<TResult>
  }

  send(data: { data?: TData; params?: TParams } = {}) {
    return this.exec(data as TAjaxConfig<TParams, TData>)
  }

  sendQuery(query?: TParams) {
    return this.exec({ params: query, method: 'GET' } as TAjaxConfig<TParams, TData>)
  }
}

// export const buildHook = <TResult = any, TParams extends ComplexObject = any, TData extends ComplexObject = any>(
//   config: TAjaxConfig<TParams, TData> | string,
// ) => {
//   let canceler: () => void

//   const cancelAjax: AjaxPlugin = (next, config) => {
//     canceler = config.meta?.canceler
//     return next()
//   }

//   onUnmounted(() => {
//     if (canceler)
//       canceler()
//   })

//   onDeactivated(() => {
//     if (canceler)
//       canceler()
//   })

//   const agent = new AjaxHookInstance<TResult, TParams, TData>(getNiceAxiosInstance().attach([cancelAjax]), config)
//   return (data: TData, options?: TAjaxConfig<TParams, TData>) => {
//     return agent.exec({ data, ...options })
//   }
// }
