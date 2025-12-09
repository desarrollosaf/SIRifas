import { __decorate } from "tslib";
import { NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../../core/services/user.service';
import Swal from 'sweetalert2';
let LoginComponent = class LoginComponent {
    router;
    route;
    fb;
    returnUrl;
    loggedin = false;
    Urfc = '';
    Upassword = '';
    userRole$;
    formLogin;
    _userService = inject(UserService);
    constructor(router, route, fb) {
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.formLogin = this.fb.group({
            Urfc: [null, Validators.required],
            Upassword: [null, Validators.required],
        }, {
            validators: []
        });
    }
    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    onLoggedin(form) {
        // console.log('envio login')
        const user = {
            rfc: form.value.Urfc,
            password: form.value.Upassword
        };
        this._userService.login(user).subscribe({
            next: (response) => {
                const userData = response.user;
                const bandera = response.bandera;
                localStorage.setItem('isLoggedin', 'true');
                this._userService.setCurrentUser(userData);
                if (bandera) {
                    this.router.navigate(['/']);
                }
                else {
                    this.router.navigate([this.returnUrl]);
                }
            },
            error: (e) => {
                if (e.status === 400) {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Usuario no existe.",
                        showConfirmButton: false,
                        timer: 3000
                    });
                }
                else if (e.status === 402) {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Contraseña incorrecta.",
                        showConfirmButton: false,
                        timer: 3000
                    });
                }
                else {
                    console.error('Error desconocido:', e);
                }
            },
        });
        // console.log(user);
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        imports: [
            NgStyle,
            RouterLink,
            FormsModule
        ],
        templateUrl: './login.component.html',
        styleUrl: './login.component.scss'
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map