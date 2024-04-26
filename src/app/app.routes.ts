import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'tutorial/:id', loadComponent: () => import('./tutorial/tutorial.component').then(mod => mod.TutorialComponent) },
    { path: 'tutorials', loadComponent: () => import('./full-list/full-list.component').then(mod => mod.FullListComponent) },
    { path: '', redirectTo: 'tutorials', pathMatch: "full" }
];
