import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { environment } from '../../../environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const reqWithHeader = req.clone({
    headers: req.headers
      .set('Accept', 'application/vnd.github+json')
      .set('Authorization', 'Bearer ' + inject(AuthService).token)
      .set('X-GitHub-Api-Version', '2022-11-28')
  });
  return next(reqWithHeader);
};
