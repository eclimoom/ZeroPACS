import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    console.log(environment.apiPrefix, environment.apiPrefix === '/mocks');

    if (environment.apiPrefix === '/mocks') {
      const mockReq = req.clone({
        url: req.url + '.json',
        method: 'GET',
      });
      return next.handle(mockReq);
    }

    // send cloned request with header to the next handler.
    return next.handle(req);
  }
}
