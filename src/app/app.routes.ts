import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/portfolio/portfolio')
        .then(m => m.Portfolio)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about')
        .then(m => m.About)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact')
        .then(m => m.Contact)
  }
];
