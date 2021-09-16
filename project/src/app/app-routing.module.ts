import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriptoComponent } from './components/cripto/cripto.component';
import { FourOFourComponent } from './components/four-o-four/four-o-four.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/cripto',
    pathMatch: 'full',
  },
  { path: 'cripto', component: CriptoComponent },
  { path: 'notFound', component: FourOFourComponent },
  { path: '**', redirectTo: 'notFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
