import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatherIconDirective } from '../../../../core/feather-icon/feather-icon.directive';
let InvoiceComponent = class InvoiceComponent {
};
InvoiceComponent = __decorate([
    Component({
        selector: 'app-invoice',
        imports: [
            FeatherIconDirective,
            RouterLink
        ],
        templateUrl: './invoice.component.html'
    })
], InvoiceComponent);
export { InvoiceComponent };
//# sourceMappingURL=invoice.component.js.map