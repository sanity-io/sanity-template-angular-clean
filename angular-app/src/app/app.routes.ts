import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component'),
    pathMatch: 'full',
  },
  {
    path: 'post/:slug',
    loadComponent: () => import('./post/post.component'),
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
