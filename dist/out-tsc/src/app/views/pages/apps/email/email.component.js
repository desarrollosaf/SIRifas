import { __decorate } from "tslib";
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
let EmailComponent = class EmailComponent {
    isAsideNavCollapsed = true;
};
EmailComponent = __decorate([
    Component({
        selector: 'app-email',
        imports: [
            RouterOutlet,
            RouterLink,
            RouterLinkActive,
            NgbCollapseModule,
            NgClass
        ],
        templateUrl: './email.component.html',
        styleUrl: './email.component.scss'
    })
], EmailComponent);
export { EmailComponent };
//# sourceMappingURL=email.component.js.map