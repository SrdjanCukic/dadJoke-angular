import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, timeout } from 'rxjs/operators';
import { LoaderService } from './services/loader.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loader: LoaderService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loader.setLoadingState(true);
    return next.handle(request).pipe(
      finalize(() => {
        this.loader.setLoadingState(false);
      })
    );
  }
}
