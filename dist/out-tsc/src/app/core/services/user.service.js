import { __decorate } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../enviroments/environment';
let UserService = class UserService {
    // private myAppUrl: string;
    myAPIUrl;
    http = inject(HttpClient);
    currentUserSubject = new BehaviorSubject(null);
    currentUser$ = this.currentUserSubject.asObservable();
    // private myAppUrl: string = 'http://localhost:3006/';
    myAppUrl;
    constructor() {
        this.myAppUrl = environment.appUrl;
        this.myAPIUrl = 'api/user';
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            this.currentUserSubject.next(JSON.parse(storedUser));
        }
    }
    login(user) {
        return this.http.post(`${this.myAppUrl}${this.myAPIUrl}/login`, user, { withCredentials: true });
    }
    getCurrentUser() {
        return this.http.get(`${this.myAppUrl}${this.myAPIUrl}/me`, {
            withCredentials: true
        });
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    setCurrentUser(user) {
        this.currentUserSubject.next(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
    }
    logout() {
        return this.http.post(`${this.myAppUrl}${this.myAPIUrl}/cerrarsesion`, {}, {
            withCredentials: true
        });
    }
    getUserRfc() {
        return this.currentUserSubject.value?.rfc || null;
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map