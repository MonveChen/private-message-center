/*
 * @Author: Monve
 * @Date: 2022-01-06 11:28:17
 * @LastEditors: Monve
 * @LastEditTime: 2022-01-06 16:59:51
 * @FilePath: /private-message-center/src/dingtalk/dingtalk.controller.ts
 */
import { Controller, Get, Param, Post, Query, Request } from '@nestjs/common';
import { DefaultResponse } from '../interface/response';
import { DingtalkService } from './dingtalk.service';

@Controller('dingtalk')
export class DingtalkController {
  constructor(private readonly dingtalkService: DingtalkService) { }

  @Get('call')
  async call_Get(@Query() body: any): Promise<DefaultResponse> {
    return await this.dingtalkService.call(body);
  }

  @Post('call')
  async call_Post(@Request() { body }): Promise<DefaultResponse> {
    return await this.dingtalkService.call(body);
  }
}
