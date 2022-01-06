/*
 * @Author: Monve
 * @Date: 2021-08-23 18:23:57
 * @LastEditors: Monve
 * @LastEditTime: 2021-09-27 18:34:05
 * @FilePath: /private-message-center/src/shared/filters/http-exception.filter.ts
 */
import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Response, Request } from 'express'

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp()
    const response = context.getResponse<Response>()
    const request = context.getRequest<Request>()
    const status = exception instanceof HttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR
    const message = exception.message ||
      (exception.message as any).message ||
      (exception.message as any).error ||
      null;

    const msgLog = {
      code: status,
      msg: '请求失败',
      data: message,
      path: request.url,
      timestamp: new Date().toISOString()
    }

    Logger.error(
      '错误信息',
      JSON.stringify(msgLog),
      'HttpExceptionFilter'
    )

    response.status(status).json(msgLog)
  }
}
