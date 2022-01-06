/*
 * @Author: Monve
 * @Date: 2022-01-06 11:44:46
 * @LastEditors: Monve
 * @LastEditTime: 2022-01-06 15:32:56
 * @FilePath: /private-message-center/src/utils/const.ts
 */

export const CODE = {
  OK: 200,  // success
  FAILED: 201,  // fail
  PARAMETER_ERROR: 202,  //传参异常
  SYSTEM_ERROR: -1,   // 系统错误
  ACCOUNT_OR_PASS_ERROR: 400,  // 账号或密码不正确
  NO_PERMISSION: 403,  // 无权限
  ACCOUNT_NOT_EXIST: 404,   // 账号不存在
  ACCOUNT_IS_EXIST: 405  // 账号已经存在
}

export const DING_CONFIG = {
  webhook: process.env.WEBHOOK,
  secret: process.env.SECRET
}
