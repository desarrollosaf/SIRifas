import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FeatherIconDirective } from '../../../../core/feather-icon/feather-icon.directive';
import { RouterLink } from '@angular/router';
let FeatherComponent = class FeatherComponent {
};
FeatherComponent = __decorate([
    Component({
        selector: 'app-feather',
        imports: [
            RouterLink,
            FeatherIconDirective
        ],
        templateUrl: './feather.component.html'
    })
], FeatherComponent);
export { FeatherComponent };
//# sourceMappingURL=feather.component.js.map