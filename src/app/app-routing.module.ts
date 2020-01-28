import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth-guard.service';

const routes: Routes = [{
  path: 'login',
  loadChildren: './login/login.module#LoginPageModule'
}, {
  path: '',
  loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
