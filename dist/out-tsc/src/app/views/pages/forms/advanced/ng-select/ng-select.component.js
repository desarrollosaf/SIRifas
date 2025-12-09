import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent as MyNgSelectComponent } from '@ng-select/ng-select';
import { PeoplesData } from '../../../../../core/dummy-datas/peoples.data';
import { UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
let NgSelectComponent = class NgSelectComponent {
    simpleItems = [];
    selectedSimpleItem = null;
    people = [];
    selectedPersonId = '';
    selectedSearchPersonId = '';
    selectedPeople = null;
    groupedMultiSelectedPeople = null;
    customTemplateSelectedPeople = null;
    constructor() { }
    ngOnInit() {
        // simple array
        this.simpleItems = [true, 'Two', 3];
        // array of objects
        this.people = PeoplesData.peoples;
    }
};
NgSelectComponent = __decorate([
    Component({
        selector: 'app-ng-select',
        imports: [
            RouterLink,
            NgLabelTemplateDirective,
            NgOptionTemplateDirective,
            MyNgSelectComponent,
            FormsModule,
            UpperCasePipe,
        ],
        templateUrl: './ng-select.component.html'
    })
], NgSelectComponent);
export { NgSelectComponent };
//# sourceMappingURL=ng-select.component.js.map