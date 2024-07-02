import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService=inject(AuthService);
  const reqWithHeader = req.clone({
    headers: req.headers
    .set('Accept', 'application/vnd.github+json')
    .set('Authorization', 'Bearer ' + authService.token())
    .set('X-GitHub-Api-Version', '2022-11-28')
  });
  return next(reqWithHeader);
};
