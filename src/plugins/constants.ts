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
