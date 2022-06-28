import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

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
    canActivate: [AuthGuard],
  },

  {
    path: 'movements',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/movements/movements.module').then(
        (m) => m.MovementsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
