import { Routes } from "@angular/router";

export default[
    {
        path: '',
        loadComponent: () => import('./rifa.component').then(c => c.RifaComponent)
    },

] as Routes;