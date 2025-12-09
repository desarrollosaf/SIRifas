import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let RegistroService = class RegistroService {
    http;
    myAppUrl = 'http://localhost:3001/';
    myAPIUrl = 'api/registro/insert';
    constructor(http) {
        this.http = http;
    }
};
RegistroService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RegistroService);
export { RegistroService };
//# sourceMappingURL=registro.service.js.map