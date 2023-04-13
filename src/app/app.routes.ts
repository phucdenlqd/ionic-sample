import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'list',
    loadComponent: () =>
      import('./todo-list/todo-list.component').then(
        (m) => m.TodoListComponent
      ),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./todo-add/todo-add.component').then(
        (m) => m.TodoAddComponent
      ),
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
];
