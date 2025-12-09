import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
let InputMaskComponent = class InputMaskComponent {
};
InputMaskComponent = __decorate([
    Component({
        selector: 'app-input-mask',
        imports: [
            RouterLink,
            NgxMaskDirective
        ],
        providers: [provideNgxMask()],
        templateUrl: './input-mask.component.html'
    })
], InputMaskComponent);
export { InputMaskComponent };
//# sourceMappingURL=input-mask.component.js.map