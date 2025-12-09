import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ColorPickerModule } from 'ngx-color-picker';
let NgxColorPickerComponent = class NgxColorPickerComponent {
    grayscaleColor = "#bcbcbc";
    color1 = "#727cf5";
    color2 = "#7987a1";
    color3 = "rgb(247, 126, 185)";
    color4 = "hsl(180, 54%, 61%)";
    color5 = "#fbbc06";
    color6 = "#ff3366";
    color7 = "#ececec";
    color8 = "#b1cfec";
    color9 = "#7ee5e5";
    color10 = "#f77eb9";
};
NgxColorPickerComponent = __decorate([
    Component({
        selector: 'app-ngx-color-picker',
        imports: [
            RouterLink,
            ColorPickerModule
        ],
        templateUrl: './ngx-color-picker.component.html'
    })
], NgxColorPickerComponent);
export { NgxColorPickerComponent };
//# sourceMappingURL=ngx-color-picker.component.js.map