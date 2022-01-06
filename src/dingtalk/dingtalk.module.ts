import { Module } from '@nestjs/common';
import { DingtalkService } from './dingtalk.service';
import { DingtalkController } from './dingtalk.controller';

@Module({
  controllers: [DingtalkController],
  providers: [DingtalkService]
})
export class DingtalkModule { }
