import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
let ErrorComponent = class ErrorComponent {
    route;
    type;
    title;
    desc;
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.type = this.route.snapshot.paramMap.get('type');
        switch (this.type) {
            case '404':
                this.title = 'Page Not Found';
                this.desc = 'Oopps!! The page you were looking for doesn\'t exist.';
                break;
            case '500':
                this.title = 'Internal Server Error',
                    this.desc = 'Oopps!! There wan an error. Please try agin later.';
                break;
            default:
                this.type = 'Ooops..';
                this.title = 'Something went wrong';
                this.desc = 'Looks like something went wrong.<br>' + 'We\'re working on it';
        }
    }
};
ErrorComponent = __decorate([
    Component({
        selector: 'app-error',
        imports: [
            RouterLink
        ],
        templateUrl: './error.component.html'
    })
], ErrorComponent);
export { ErrorComponent };
//# sourceMappingURL=error.component.js.map