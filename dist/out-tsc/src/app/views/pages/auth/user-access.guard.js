import { __decorate } from "tslib";
// user-access.guard.ts
import { Injectable } from '@angular/core';
let UserAccessGuard = class UserAccessGuard {
    userService;
    router;
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate() {
        const rfc = this.userService.currentUserValue?.rfc ?? '';
        const role = rfc.startsWith('GEN25') ? 'GEN25' : 'usuario';
        if (role == 'GEN25') {
            return true;
        }
        this.router.navigate(['/not-authorized']);
        return false;
    }
    canActivateChild() {
        return this.canActivate();
    }
};
UserAccessGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserAccessGuard);
export { UserAccessGuard };
//# sourceMappingURL=user-access.guard.js.map