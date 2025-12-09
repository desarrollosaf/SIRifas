export default [
    {
        path: '',
        loadComponent: () => import('./seccion.component').then(c => c.SeccionComponent)
    },
    // {
    //     path: 'registroPersonal',
    //     loadComponent: () => import('./detalles/detalles.component').then(c => c.DetallesComponent)
    // },
    // {
    //     path: 'editPersonal/:id',
    //     loadComponent: () => import('./detalles/detalles.component').then(c => c.DetallesComponent)
    // },
    // {
    //     path: 'bajaPersonal/:id',
    //     loadComponent: () => import('./detalles/detalles.component').then(c => c.DetallesComponent)
    // }
];
//# sourceMappingURL=seccion.routes.js.map