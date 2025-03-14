import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'post/:slug',
    component: PostComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
