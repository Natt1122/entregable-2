import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'sin-ingresar',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'sin-ingresar',
    loadChildren: () => import('./sin-ingresar/sin-ingresar.module').then( m => m.SinIngresarPageModule)
  },
  {
    path: 'agregar-mercancia',
    loadChildren: () => import('./agregar-mercancia/agregar-mercancia.module').then( m => m.AgregarMercanciaPageModule)
  },
  {
    path: 'mostrarmercancia',
    loadChildren: () => import('./mostrarmercancia/mostrarmercancia.module').then( m => m.MostrarmercanciaPageModule)
  },


 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
