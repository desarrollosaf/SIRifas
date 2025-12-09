import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
let FaqComponent = class FaqComponent {
};
FaqComponent = __decorate([
    Component({
        selector: 'app-faq',
        imports: [
            RouterLink,
            NgbAccordionModule
        ],
        templateUrl: './faq.component.html'
    })
], FaqComponent);
export { FaqComponent };
//# sourceMappingURL=faq.component.js.map