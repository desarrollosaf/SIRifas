import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
let SweetAlertComponent = class SweetAlertComponent {
};
SweetAlertComponent = __decorate([
    Component({
        selector: 'app-sweet-alert',
        imports: [
            RouterLink,
            SweetAlert2Module
        ],
        templateUrl: './sweet-alert.component.html'
    })
], SweetAlertComponent);
export { SweetAlertComponent };
//# sourceMappingURL=sweet-alert.component.js.map