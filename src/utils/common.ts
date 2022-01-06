/*
 * @Author: Monve
 * @Date: 2022-01-06 11:46:15
 * @LastEditors: Monve
 * @LastEditTime: 2022-01-06 11:46:35
 * @FilePath: /private-message-center/src/utils/common.ts
 */

import { DefaultResponse } from "../interface/response";
import { CODE } from "./const";

/**
 * 校核参数是否为 undefined
 * @param args 要校核的参数
 * @returns DefaultResponse | null
 */
export const ck = (...args: any[]): DefaultResponse | null => {
  return args.indexOf(undefined) === -1 ? null : { code: CODE.PARAMETER_ERROR, msg: '参数 不能为空' };
}