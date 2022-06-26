import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('../app/pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: () =>
      import('../app/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'movements',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/movements/movements.module').then(
        (m) => m.MovementsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
