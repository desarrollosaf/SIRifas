export default [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then(c => c.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./register/register.component').then(c => c.RegisterComponent)
    }
];
//# sourceMappingURL=auth.routes.js.map