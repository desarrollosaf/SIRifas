import { __decorate } from "tslib";
import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
let RegisterComponent = class RegisterComponent {
    router;
    constructor(router) {
        this.router = router;
    }
    onRegister(e) {
        e.preventDefault();
        localStorage.setItem('isLoggedin', 'true');
        if (localStorage.getItem('isLoggedin') === 'true') {
            this.router.navigate(['/']);
        }
    }
};
RegisterComponent = __decorate([
    Component({
        selector: 'app-register',
        imports: [
            NgStyle,
            RouterLink
        ],
        templateUrl: './register.component.html',
        styleUrl: './register.component.scss'
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map