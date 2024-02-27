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
