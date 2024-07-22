import type { Func, NiceAxiosOptions, NiceAxiosPlugin } from '.'
import { buildDefaultAfterPlugin, buildDefaultBeforePlugin, NiceAxiosPluginOrder } from '.'
import { NiceAxios } from './container'
import { addCancelerPlugin, removeCancelerPlugin } from './plugins/ajaxCanceler'
import { mergeRequestPlugin } from './plugins/mergeRequestPlugin'
let instance: NiceAxios

// step 20

/**
 * get default plugins
 * 约定 axios 前置观察者现在executor中执行，后置观察者在返回值then中执行。所以插件的执行顺序是先前置插件，再axios执行，最后后置插件
 * 前置观察者的执行顺序是按照order从小到大的顺序执行，后置观察者的执行顺序是按照order从大到小的顺序执行
 * @param options
 * @returns
 */
const getDefaultPlugins = (options?: NiceAxiosOptions | Func<NiceAxiosOptions>) => {
  return [
    {
      desc: '添加当前 Ajax 请求的手动取消功能：应该在所有插件中的第一个',
      order: NiceAxiosPluginOrder.CANCEL_REQUEST_BEFORE_PLUGIN,
      executor: addCancelerPlugin
    },
    {
      desc: '合并请求',
      order: NiceAxiosPluginOrder.MERGE_REQUEST_BEFORE_PLUGIN,
      executor: mergeRequestPlugin
    },
    {
      desc: '基础业务前置插件',
      order: NiceAxiosPluginOrder.GENERAL_BEFORE_PLUGIN,
      executor: buildDefaultBeforePlugin(options)
    },

    //-------------------------------------------- ↓ After Plugin ↓ --------------------------------------------
    {
      desc: '通用后置逻辑',
      order: NiceAxiosPluginOrder.GENERAL_AFTER_PLUGIN,
      executor: buildDefaultAfterPlugin(options)
    },
    {
      desc: '移除当前请求的手动取消功能：应该在所有插件中的最后一个',
      order: NiceAxiosPluginOrder.REMOVE_CANCEL_REQUEST_AFTER_PLUGIN,
      executor: removeCancelerPlugin
    }
  ]
}

/**
 * the plugin's order ,not more than -1000 ~ 1000 range and step length of 20
 *   // 越小越前面

  // pre plugins
  { desc: '添加当前 Ajax 请求的手动取消功能：应该在所有插件中的第一个', order: -1040, executor: addCancelerPlugin },
  { desc: '合并请求', order: -1020, executor: mergeRequestPlugin },
  {
    desc: '基础业务前置插件',
    order: -1000,
    executor: buildBeforePlugin,
  },

  // order 越大，越早被执行
  // post plugins
  { desc: '通用后置逻辑', order: 1000, executor: buildAfterPlugin },
  { desc: '移除当前请求的手动取消功能：应该在所有插件中的最后一个', order: 0, executor: removeCancelerPlugin },
 * @param customPlugins
 * @param options
 * @returns
 */
export const createNiceAxios = (
  options?: NiceAxiosOptions | Func<NiceAxiosOptions>,
  customPlugins: NiceAxiosPlugin[] = []
) => {
  return new NiceAxios([...getDefaultPlugins(options), ...customPlugins])
}

/**
 * get nice_axios instance
 * @returns
 */
export const getNiceAxiosInstance = (
  options?: NiceAxiosOptions | Func<NiceAxiosOptions>,
  customPlugins: NiceAxiosPlugin[] = []
) => {
  if (!instance) instance = createNiceAxios(options, customPlugins)

  return instance
}
