import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let MedicamentosService = class MedicamentosService {
    http;
    myAppUrl = 'http://localhost:3001/';
    myAPIUrl = 'api/medicamentos/getmedicamentos';
    myAPIUrl1 = 'api/medicamentos/combounidad';
    myAPIUrl2 = 'api/medicamentos/create';
    myAPIUrl3 = 'api/medicamentos/edit';
    myAPIUrl4 = 'api/medicamentos/update';
    myAPIUrl5 = 'api/medicamentos/baja';
    myAPIUrl6 = 'api/medicamentos/addCaducidad';
    myAPIUrl7 = 'api/medicamentos/getCaducidades';
    myAPIUrl8 = 'api/medicamentos/transferir';
    myAPIUrl9 = 'api/medicamentos/getMedicamento';
    constructor(http) {
        this.http = http;
    }
    getMedicamentos() {
        const url = `${this.myAppUrl}${this.myAPIUrl}`;
        return this.http.get(url);
    }
    getUnidades() {
        const url = `${this.myAppUrl}${this.myAPIUrl1}`;
        return this.http.get(url);
    }
    addMedicamento(detalles) {
        const url = `${this.myAppUrl}${this.myAPIUrl2}`;
        return this.http.post(url, detalles);
    }
    edit(id) {
        const url = `${this.myAppUrl}${this.myAPIUrl3}/${id}`;
        return this.http.get(url);
    }
    update(detalles) {
        const url = `${this.myAppUrl}${this.myAPIUrl4}`;
        return this.http.post(url, detalles);
    }
    actDesactiva(id) {
        const url = `${this.myAppUrl}${this.myAPIUrl5}/${id}`;
        return this.http.get(url);
    }
    addCaducidad(detalles) {
        const url = `${this.myAppUrl}${this.myAPIUrl6}`;
        return this.http.post(url, detalles);
    }
    getCaducidades(id) {
        const url = `${this.myAppUrl}${this.myAPIUrl7}/${id}`;
        return this.http.get(url);
    }
    addTransferenci(detalles) {
        const url = `${this.myAppUrl}${this.myAPIUrl8}`;
        return this.http.post(url, detalles);
    }
    getMedicamento(id) {
        const url = `${this.myAppUrl}${this.myAPIUrl9}/${id}`;
        return this.http.get(url);
    }
};
MedicamentosService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MedicamentosService);
export { MedicamentosService };
//# sourceMappingURL=medicamentos.service.js.map