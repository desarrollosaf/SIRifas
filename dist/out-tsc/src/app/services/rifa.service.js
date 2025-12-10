import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/environment';
let RifaService = class RifaService {
    http;
    myAppUrl;
    myAPIUrl = 'api/rifa';
    constructor(http) {
        this.http = http;
        this.myAppUrl = environment.appUrl;
    }
    numRadom() {
        const url = `${this.myAppUrl}${this.myAPIUrl}`;
        return this.http.get(url, { withCredentials: true });
    }
};
RifaService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RifaService);
export { RifaService };
//# sourceMappingURL=rifa.service.js.map