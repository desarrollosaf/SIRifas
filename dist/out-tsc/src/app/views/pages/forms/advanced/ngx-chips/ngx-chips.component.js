import { __decorate } from "tslib";
import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TagInputModule } from 'ngx-chips';
let NgxChipsComponent = class NgxChipsComponent {
    items = ['Pizza', 'Pasta', 'Parmesan'];
    itemsAsObjects = [{ id: 0, name: 'Pizza', readonly: true }, { id: 1, name: 'Pasta' }, { id: 2, name: 'Parmesan', readonly: true }];
    itemsWithMaxLimit = ['Pizza', 'Pasta', 'Parmesan'];
    constructor() { }
    onAdd(item) {
        console.log('tag added: value is ' + item.value);
    }
    onSelect(item) {
        console.log('tag selected: value is ' + item);
    }
    onTagEdited(item) {
        console.log('tag edited: current value is ' + item);
    }
    onTextChange(text) {
        console.log('text changed: value is ' + text);
    }
};
NgxChipsComponent = __decorate([
    Component({
        selector: 'app-ngx-chips',
        imports: [
            RouterLink,
            TagInputModule,
            FormsModule,
            JsonPipe
        ],
        templateUrl: './ngx-chips.component.html'
    })
], NgxChipsComponent);
export { NgxChipsComponent };
//# sourceMappingURL=ngx-chips.component.js.map