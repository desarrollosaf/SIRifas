import { __decorate } from "tslib";
// redirect.component.ts
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
let RedirectComponent = class RedirectComponent {
    router = inject(Router);
    userService = inject(UserService);
    ngOnInit() {
        const rfc = this.userService.currentUserValue?.rfc ?? '';
        const role = rfc.startsWith('GEN25') ? 'GEN25' : 'usuario';
        if (role == 'GEN25') {
            this.router.navigate(['/medicamentos']);
        }
        else {
            this.router.navigate(['/medicamentos']);
        }
    }
};
RedirectComponent = __decorate([
    Component({
        selector: 'app-redirect',
        standalone: true,
        template: ''
    })
], RedirectComponent);
export { RedirectComponent };
//# sourceMappingURL=redirect.component.js.map