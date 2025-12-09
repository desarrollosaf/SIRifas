import { __decorate } from "tslib";
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RifaService } from '../../../services/rifa.service';
let RifaComponent = class RifaComponent {
    router;
    modelService;
    fb;
    aRouter;
    _rifa = inject(RifaService);
    formRifa;
    resultados = {};
    constructor(router, modelService, fb, aRouter) {
        this.router = router;
        this.modelService = modelService;
        this.fb = fb;
        this.aRouter = aRouter;
        this.formRifa = this.fb.group({
            busqueda: [''],
        });
    }
    sorteo() {
        this._rifa.numRadom().subscribe((resultados) => {
            this.resultados = resultados;
        });
    }
};
RifaComponent = __decorate([
    Component({
        selector: 'app-rifa',
        imports: [
            NgxDatatableModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            RouterModule
        ],
        templateUrl: './rifa.component.html',
        styleUrl: './rifa.component.scss'
    })
], RifaComponent);
export { RifaComponent };
//# sourceMappingURL=rifa.component.js.map