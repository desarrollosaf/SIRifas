import { __decorate } from "tslib";
import { Directive } from '@angular/core';
import * as feather from 'feather-icons';
let FeatherIconDirective = class FeatherIconDirective {
    constructor() { }
    ngAfterViewInit() {
        feather.replace();
    }
};
FeatherIconDirective = __decorate([
    Directive({
        selector: '[appFeatherIcon]',
        standalone: true
    })
], FeatherIconDirective);
export { FeatherIconDirective };
//# sourceMappingURL=feather-icon.directive.js.map