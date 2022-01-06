/*
 * @Author: Monve
 * @Date: 2022-01-06 11:38:56
 * @LastEditors: Monve
 * @LastEditTime: 2022-01-06 11:38:56
 * @FilePath: /private-message-center/src/interface/response.ts
 */

export interface DefaultResponse {
  code: number;
  data?: unknown;
  msg: string;
}