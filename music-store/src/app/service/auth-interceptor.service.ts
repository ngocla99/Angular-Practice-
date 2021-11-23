import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptorService implements HttpInterceptor {
  private TOKEN =
    'BQCNOveFvs45oRyXY1uBUhI1JR66KYkOMulPb66qMMIFTTZ9Ncj4ET4mN3KifSQBzAiCyHwlKBj973Q_-LdaRrHJd5jvZ4lUmG5wh-2roOYuPjhpQ7Op5fhHU9GZVgTCiMhAX-FroWQlwnzmbqqYf0wzB6gxLdC21is';
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedRequest = request.clone({
      setHeaders: { Authorization: `Bearer ${this.TOKEN}` },
    });
    return next.handle(modifiedRequest);
  }
}
