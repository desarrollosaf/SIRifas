import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
export const authInterceptor = (req, next) => {
    const router = inject(Router);
    const authReq = req.clone({
        withCredentials: true
    });
    return next(authReq).pipe(catchError(err => {
        if (err.status === 401) {
            router.navigate(['/auth/login']);
        }
        return throwError(() => err);
    }));
};
//# sourceMappingURL=auth.interceptor.js.map