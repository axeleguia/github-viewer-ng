import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const httpReq = req.clone({
      setHeaders: {
        'github-token': localStorage.getItem('GITHUB_TOKEN') || '',
      },
    });
    return next.handle(httpReq);
  }
}
