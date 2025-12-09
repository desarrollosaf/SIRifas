export default [
    {
        path: '',
        loadComponent: () => import('./personal.component').then(c => c.PersonalComponent)
    },
    {
        path: 'registroPersonal',
        loadComponent: () => import('./detalles/detalles.component').then(c => c.DetallesComponent)
    },
    {
        path: 'editPersonal/:id',
        loadComponent: () => import('./detalles/detalles.component').then(c => c.DetallesComponent)
    },
    {
        path: 'bajaPersonal/:id',
        loadComponent: () => import('./detalles/detalles.component').then(c => c.DetallesComponent)
    }
];
//# sourceMappingURL=personal.routes.js.map