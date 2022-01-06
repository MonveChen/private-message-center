/*
 * @Author: Monve
 * @Date: 2022-01-06 11:10:17
 * @LastEditors: Monve
 * @LastEditTime: 2022-01-06 14:54:15
 * @FilePath: /private-message-center/src/main.ts
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './shared/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
