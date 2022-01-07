/*
 * @Author: Monve
 * @Date: 2022-01-06 11:29:50
 * @LastEditors: Monve
 * @LastEditTime: 2022-01-07 15:00:36
 * @FilePath: /private-message-center/src/dingtalk/dingtalk.service.ts
 */
import { Injectable } from '@nestjs/common';
import { DefaultResponse } from '../interface/response';
import { ck } from '../utils/common';
import { CODE, DING_CONFIG } from '../utils/const';
import * as RobotDing from "@tnnevol/robot-ding";
import { decode } from "utf8"

const ding = process.env.WEBHOOK && process.env.SECRET ?
  new (RobotDing as any)(DING_CONFIG) : null

@Injectable()
export class DingtalkService {
  async call({ content, webhook, secret, pv = null }): Promise<DefaultResponse> {
    const r = ck(content); if (r) { return r }
    content = decode(content);
    const dingtalk = webhook && secret ?
      new (RobotDing as any)({ webhook, secret }) :
      !process.env.PV || process.env.PV === pv ? ding : null

    dingtalk?.sendDing({ content })

    return {
      code: CODE.OK,
      msg: 'success'
    };
  }
}
