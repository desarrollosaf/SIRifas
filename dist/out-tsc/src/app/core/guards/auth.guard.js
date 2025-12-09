import { inject } from '@angular/core';
import { Router } from '@angular/router';
export const authGuard = (route, state) => {
    const router = inject(Router);
    if (localStorage.getItem('isLoggedin') === 'true') {
        // If the user is logged in, then return true
        return true;
    }
    // If the user is not logged in, redirect to the login page with the return URL
    router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url.split('?')[0] } });
    return false;
};
//# sourceMappingURL=auth.guard.js.map