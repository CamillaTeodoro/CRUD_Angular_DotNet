import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';

const routes: Routes = [
    {
        path: '', redirectTo: '/index',pathMatch: 'full'
      },
      {
        path: 'index', component: IndexComponent
      },
      {
        path: 'empresas', component: EmpresaComponent
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }