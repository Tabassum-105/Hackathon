import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App } from './app';
import { AdminComponent } from './Components/admin-component/admin-component';
import { RoleGuard } from './guards/role-guard';
import { NotAuthorizedComponent } from './Components/not-authorized-component/not-authorized-component';
import { HomeComponent } from './Components/home-component/home-component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // Optional redirect
  { path: 'home', component: HomeComponent },
   {
    path: 'admin',
    component: AdminComponent,
    canActivate: [RoleGuard],
    data: { role: 'admin' }  // ✅ expected role
  },
  {
    path: 'not-authorized',
    component: NotAuthorizedComponent  // Optional
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./feature/feature-module').then((m) => m.FeatureModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
