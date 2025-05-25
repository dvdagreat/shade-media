import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

import { Response as ExpressResponse } from 'express';

@Injectable()
export class CorsheadersInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ResponseObj:ExpressResponse = context.switchToHttp().getResponse();
    ResponseObj.setHeader('x-access-token', 'Your Data' );
    ResponseObj.setHeader("Access-Control-Allow-Origin", "*");
    ResponseObj.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return next.handle();
  }
}
