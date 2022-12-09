import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {
  FornecedorListarComponent
} from "./pages/administracao/fornecedor/fornecedor-listar/fornecedor-listar.component";

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"fornecedores",
    component:FornecedorListarComponent
  },
  // {
  //   path:"fornecedores/criar",
  //   component:FornecedorEditarComponent
  // },
  // {
  //   path:"fornecedores/alterar/:id",
  //   component:FornecedorEditarComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
