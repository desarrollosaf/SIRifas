import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ThemeCssVariableService = class ThemeCssVariableService {
    constructor() { }
    // Function to get the value of a root CSS variable
    getCssVariableValue = (variableName) => {
        let value = getComputedStyle(document.documentElement).getPropertyValue(variableName);
        if (value && value.length > 0) {
            value = value.trim();
        }
        return value;
    };
    getThemeCssVariables() {
        return {
            primary: this.getCssVariableValue('--bs-primary'),
            secondary: this.getCssVariableValue('--bs-secondary'),
            success: this.getCssVariableValue('--bs-success'),
            info: this.getCssVariableValue('--bs-info'),
            warning: this.getCssVariableValue('--bs-warning'),
            danger: this.getCssVariableValue('--bs-danger'),
            light: this.getCssVariableValue('--bs-light'),
            dark: this.getCssVariableValue('--bs-dark'),
            gridBorder: "rgba(77, 138, 240, .15)",
            fontFamily: this.getCssVariableValue('--bs-font-sans-serif')
        };
    }
};
ThemeCssVariableService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ThemeCssVariableService);
export { ThemeCssVariableService };
//# sourceMappingURL=theme-css-variable.service.js.map