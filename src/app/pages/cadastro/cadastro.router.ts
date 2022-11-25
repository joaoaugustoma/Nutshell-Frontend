import {Routes} from '@angular/router';
import {FornecedorFiltrarComponent} from "./fornecedor/fornecedor-filtrar/fornecedor-filtrar.component";

export const CadastroRoutes: Routes = [
  {
    path: 'cadastro/fornecedores',
    component: FornecedorFiltrarComponent,
  }
];
