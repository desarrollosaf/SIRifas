import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
let AppComponent = class AppComponent {
    themeModeService;
    title = 'demo2';
    constructor(themeModeService) {
        this.themeModeService = themeModeService;
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        imports: [RouterOutlet],
        templateUrl: './app.component.html',
        styleUrl: './app.component.scss'
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map