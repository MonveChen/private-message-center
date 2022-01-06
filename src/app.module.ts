import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DingtalkModule } from './dingtalk/dingtalk.module';

@Module({
  imports: [DingtalkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
