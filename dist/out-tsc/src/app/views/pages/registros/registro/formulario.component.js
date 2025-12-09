import { __decorate } from "tslib";
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { RegistroService } from '../../../../services/registro.service';
let DetallesComponent = class DetallesComponent {
    RegistroService;
    router;
    fb;
    aRouter;
    _registro = inject(RegistroService);
    formRegistro;
    constructor(RegistroService, router, fb, aRouter) {
        this.RegistroService = RegistroService;
        this.router = router;
        this.fb = fb;
        this.aRouter = aRouter;
        this.formRegistro = this.fb.group({
            seccion: ['', Validators.required],
            serie: ['', Validators.required],
            subserie: ['', Validators.required],
            clave: ['', Validators.required],
            ubicacion: ['', Validators.required],
            anio: ['', Validators.required],
            tomo: ['', Validators.required],
            noExp: ['', Validators.required],
            fecha_inicial: ['', Validators.required],
            fecha_final: ['', Validators.required],
            institucion: ['', Validators.required],
            nombre_exp: ['', Validators.required],
            fojas: ['', Validators.required],
            observaciones: ['', Validators.required],
            estado_doc: ['', Validators.required],
            caracteristicas_doc: ['', Validators.required],
            id: ['']
        });
        this.id = aRouter.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.getUnidades();
        this.getSecciones();
        //   if(this.id != null){
        //     this.edit();
        // }
    }
    addMedicamento() {
        //crea objeto
        const detalles = {
            medicamento: this.formMedicamento.value.medicamento,
            sustancia: this.formMedicamento.value.sustancia,
            unidad: this.formMedicamento.value.unidad,
            piezas: this.formMedicamento.value.piezas,
            // pzasEnt: this.formMedicamento.value.pzasEnt,
            // caducidad: this.formMedicamento.value.caducidad,
            id: this.formMedicamento.value.id
        };
        if (this.formMedicamento.value.id != 0 && this.formMedicamento.value.id != null) {
            console.log('edit');
            this._medicamentos.update(detalles).subscribe(data => {
                Swal.fire({
                    title: '',
                    text: 'Medicamento modificado correctamente',
                    icon: 'success',
                    timer: 3000,
                    showConfirmButton: false
                }).then((result) => {
                    this.router.navigateByUrl('/medicamentos');
                });
            });
        }
        else {
            console.log(detalles);
            this._medicamentos.addMedicamento(detalles).subscribe(data => {
                console.log(data);
                Swal.fire({
                    title: '',
                    text: 'Medicamento registrado correctamente',
                    icon: 'success',
                    timer: 3000,
                    showConfirmButton: false
                }).then((result) => {
                    this.router.navigateByUrl('/medicamentos');
                });
            });
        }
    }
    getUnidades() {
        this._medicamentos.getUnidades().subscribe(data => {
            this.unidadArray = [
                { id: '', name: '--Seleccione una opción--' },
                ...data.map((item) => ({
                    id: item.id,
                    name: item.unidad
                }))
            ];
        });
    }
    edit() {
        this._medicamentos.edit(this.id).subscribe({
            next: (response) => {
                console.log(response);
                this.formMedicamento.setValue({
                    medicamento: response.medicamento,
                    sustancia: response.sustancia,
                    unidad: response.m_unidad.id,
                    piezas: response.piezas,
                    id: response.id
                });
            },
            error: (e) => {
                console.error('Error:', e.error?.msg || e);
            }
        });
    }
};
DetallesComponent = __decorate([
    Component({
        selector: 'app-detalles',
        imports: [
            FormsModule,
            NgSelectModule,
            ReactiveFormsModule,
            CommonModule,
            RouterModule
        ],
        templateUrl: './detalles.component.html',
        styleUrl: './detalles.component.scss'
    })
], DetallesComponent);
export { DetallesComponent };
//# sourceMappingURL=formulario.component.js.map