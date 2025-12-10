import { Routes } from "@angular/router";

export default[
    {
        path: '',
        loadComponent: () => import('./sorteo.component').then(c => c.SorteoComponent)
    },

] as Routes;