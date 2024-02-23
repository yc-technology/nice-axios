import type { ComposePlugin, ComposeResult } from '../types'

export enum ComposeDirection {
  LEFT_TO_RIGHT = 0,
  RIGHT_TO_LEFT = 1,
}

export interface ComposeInstance<R, T> {
  add(...newPlugins: ComposePlugin<R, T>[]): ComposeInstance<R, T>
  exec(options: T): ComposeResult<R>
}

export type ComposeType = <R, T>(
  defaultAction: (options: T) => ComposeResult<R>,
  ...plugins: ComposePlugin<R, T>[]
) => ComposeInstance<R, T>

export const ComposeFunc = <R, T>(
  direction: ComposeDirection,
  defaultAction: (options: T) => ComposeResult<R>,
  plugins: ComposePlugin<R, T>[],
): ComposeInstance<R, T> => ({
  add(...newPlugins) {
    if (!newPlugins.length) return this

    return ComposeFunc(direction, defaultAction, [...plugins, ...newPlugins])
  },
  exec(options) {
    type NextFuncType = (config?: T) => ComposeResult<R>
    const method = direction === ComposeDirection.LEFT_TO_RIGHT ? plugins.reduceRight : plugins.reduce

    let opts = options
    const getOpts = (config?: T) => {
      if (config) opts = config

      return opts
    }
    // <ComposePlugin<R, T>[], [callbackfn: (previousValue: unknown, currentValue: ComposePlugin<R, T>, currentIndex: number, array: ComposePlugin<R, T>[]) => unknown, initialValue: unknown], unknown>
    // @ts-ignore
    const func = method.call<ComposePlugin<R, T>[], any, unknown>(
      plugins,
      (acc: NextFuncType, x: ComposePlugin<R, T>) => (config?: T) => x(acc, getOpts(config)),
      (config?: T) => defaultAction(getOpts(config)),
    ) as NextFuncType

    return func(options)
  },
})

export const compose = <R, T>(
  defaultAction: (options: T) => ComposeResult<R>,
  ...plugins: ComposePlugin<R, T>[]
): ComposeInstance<R, T> => ComposeFunc(ComposeDirection.LEFT_TO_RIGHT, defaultAction, plugins)

export const composeRight = <R, T>(
  defaultAction: (options: T) => ComposeResult<R>,
  ...plugins: ComposePlugin<R, T>[]
): ComposeInstance<R, T> => ComposeFunc(ComposeDirection.RIGHT_TO_LEFT, defaultAction, plugins)
