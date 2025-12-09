import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NarikCustomValidatorsModule } from '@narik/custom-validators';
let CustomValidatorsComponent = class CustomValidatorsComponent {
};
CustomValidatorsComponent = __decorate([
    Component({
        selector: 'app-custom-validators',
        imports: [
            RouterLink,
            FormsModule,
            NarikCustomValidatorsModule
        ],
        templateUrl: './custom-validators.component.html'
    })
], CustomValidatorsComponent);
export { CustomValidatorsComponent };
//# sourceMappingURL=custom-validators.component.js.map