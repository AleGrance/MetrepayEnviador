import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnviadorMetrepayComponent } from './pages/enviador-metrepay/enviador-metrepay.component';
import { EnviadorComponent } from './pages/enviador/enviador.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/enviadorMetrepay',
    pathMatch: 'full'
  },
  {
    path: 'enviador', component: EnviadorComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'enviadorMetrepay', component: EnviadorMetrepayComponent,
    //canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
