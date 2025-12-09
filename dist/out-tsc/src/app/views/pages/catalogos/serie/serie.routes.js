export default [
    {
        path: '',
        loadComponent: () => import('./serie.component').then(c => c.SerieComponent)
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
//# sourceMappingURL=serie.routes.js.map