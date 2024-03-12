export const AjaxMethods = {
  GET: 'GET',
  DELETE: 'DELETE',
  HEAD: 'HEAD',
  OPTIONS: 'OPTIONS',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  GET_LOWER: 'get',
  DELETE_LOWER: 'delete',
  HEAD_LOWER: 'head',
  OPTIONS_LOWER: 'options',
  POST_LOWER: 'post',
  PUT_LOWER: 'put',
  PATCH_LOWER: 'patch',
  PURGE: 'PURGE',
  PURGE_LOWER: 'purge',
  LINK: 'LINK',
  LINK_LOWER: 'link',
  UNLINK: 'UNLINK',
  UNLINK_LOWER: 'unlink',
} as const

export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
  STREAM = 'application/octet-stream',
  XPROTO = 'application/x-protobuf',
}

// 接口返回值data不能为这个，否则会判为请求失败
export const errorResult = '__ERROR_RESULT__'

export const errorResultNull = '__ERROR_RESULT_NULL__'

export enum NiceAxiosPluginOrder {
  MAX_AFTER_PLUGIN = 10000,
  MIN_BEFORE_PLUGIN = -10000,
  /**
   * 添加当前 Ajax 请求的手动取消功能：应该在所有插件中的第一个
   */
  CANCEL_REQUEST_BEFORE_PLUGIN = -9000,

  /**
   * 合并请求
   */
  MERGE_REQUEST_BEFORE_PLUGIN = -8900,

  /**
   * 基础业务前置插件
   */
  GENERAL_BEFORE_PLUGIN = -8800,

  // -------------------- ↓ After Plugin ↓ --------------------

  /**
   * 移除当前请求的手动取消功能：应该在所有后置插件中的最后一个
   */
  REMOVE_CANCEL_REQUEST_AFTER_PLUGIN = 9000,

  /**
   * 通用后置逻辑, 最优先被执行一般处理原始数据
   */
  GENERAL_AFTER_PLUGIN = 8900,
}
