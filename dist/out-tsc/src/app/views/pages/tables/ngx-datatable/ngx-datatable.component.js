import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ColumnMode, NgxDatatableModule } from '@siemens/ngx-datatable';
let NgxDatatableComponent = class NgxDatatableComponent {
    rows = [];
    temp = [];
    loadingIndicator = true;
    reorderable = true;
    ColumnMode = ColumnMode;
    table;
    constructor() {
        this.fetch((data) => {
            //cache our list
            this.temp = [...data];
            // push our initial complete list
            this.rows = data;
            setTimeout(() => {
                this.loadingIndicator = false;
            }, 1500);
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `data/100k.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    updateFilter(event) {
        const val = event.target.value.toLocaleLowerCase();
        // filter our data
        const temp = this.temp.filter(function (d) {
            return d.name.toLocaleLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
        // whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
};
__decorate([
    ViewChild('table')
], NgxDatatableComponent.prototype, "table", void 0);
NgxDatatableComponent = __decorate([
    Component({
        selector: 'app-ngx-datatable',
        imports: [
            RouterLink,
            NgxDatatableModule
        ],
        templateUrl: './ngx-datatable.component.html'
    })
], NgxDatatableComponent);
export { NgxDatatableComponent };
//# sourceMappingURL=ngx-datatable.component.js.map