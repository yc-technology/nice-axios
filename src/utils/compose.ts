import type { ComposePlugin, ComposeResult } from '../types'

/**
 * 	1.ComposeDirection 枚举：定义了两种组合方向，LEFT_TO_RIGHT 和 RIGHT_TO_LEFT，用于控制插件（函数）执行的顺序。
	2.ComposeInstance 接口：定义了一个具体的组合实例，该实例具有：
    ▪	add(...newPlugins) 方法，允许向实例动态添加更多的插件。
    ▪	exec(options) 方法，用于执行已添加的插件，并传入初始选项。
	3.	ComposeFunc 函数：是一个工厂函数，根据指定的方向、默认操作以及一组初始插件创建一个 ComposeInstance 实例。
	4.	compose 和 composeRight 函数：提供了快捷创建 ComposeInstance 实例的方式，分别对应从左向右（LEFT_TO_RIGHT）和从右向左（RIGHT_TO_LEFT）的执行方向。
  使用场景：
	•	中间件处理：在像 Express 或 Koa 这样的框架中，通过组合不同的中间件来按顺序处理HTTP请求。
	•	数据转换管道：用于数据分析和转换任务，例如，从一个原始数据集开始，逐步应用一系列转换和过滤器。
	•	插件系统：在需要通过插件扩展应用程序功能的系统中，为插件提供一种灵活的组合和执行机制。
  示例使用：
  假设有两个简单的转换函数（插件），可以将它们组合起来对数据进行连续处理：

  ```ts
  // 定义转换函数作为插件
  const toUpperCasePlugin = (next, options) => next(options.toUpperCase());
  const exclaimPlugin = (next, options) => next(options + '!');

  // 创建compose实例，并应用转换
  const transformText = compose(
    (text) => text,  // 默认动作，即初始处理函数
    toUpperCasePlugin,
    exclaimPlugin
  );

  // 执行
  console.log(transformText.exec("hello"));  // 输出：HELLO!
  ```
*/

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

/**
 * 工程类返回一个 compose 实例
 * @param direction
 * @param defaultAction 默认操作实际调用的方法 例如：网络请求 axios()
 * @param plugins
 * @returns
 */
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
    // 判断方向，影响插件的执行顺序
    const method = direction === ComposeDirection.LEFT_TO_RIGHT ? plugins.reduceRight : plugins.reduce

    let opts = options
    // 闭包，获取配置
    const getOpts = (config?: T) => {
      if (config) opts = config

      return opts
    }

    // 先进后出
    const func = method.call<ComposePlugin<R, T>[], any, unknown>(
      plugins,
      // 高阶函数，每一次都是返回一个函数，(config?: T) => x(acc, getOpts(config) 把上一个方法传到下一个方法当中，并带上配置
      (acc: NextFuncType, x: ComposePlugin<R, T>) => (config?: T) => x(acc, getOpts(config)),
      // 调用时传入的 config，如果有值就覆盖默认的 options 实现（getOpts）
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
