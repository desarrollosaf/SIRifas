export default [
    { path: '', redirectTo: 'feather', pathMatch: 'full' },
    {
        path: 'feather-icons',
        loadComponent: () => import('./feather/feather.component').then(c => c.FeatherComponent)
    },
];
//# sourceMappingURL=icons.routes.js.map