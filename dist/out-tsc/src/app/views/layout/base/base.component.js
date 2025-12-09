import { __decorate } from "tslib";
import { Component, inject } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
let BaseComponent = class BaseComponent {
    isLoading = false;
    router = inject(Router);
    constructor() { }
    ngOnInit() {
        // Spinner for lazy loading modules/components
        this.router.events.forEach((event) => {
            if (event instanceof RouteConfigLoadStart) {
                this.isLoading = true;
            }
            else if (event instanceof RouteConfigLoadEnd) {
                this.isLoading = false;
            }
        });
    }
};
BaseComponent = __decorate([
    Component({
        selector: 'app-base',
        imports: [
            RouterOutlet,
            NavbarComponent,
            FooterComponent
        ],
        templateUrl: './base.component.html',
        styleUrl: './base.component.scss'
    })
], BaseComponent);
export { BaseComponent };
//# sourceMappingURL=base.component.js.map