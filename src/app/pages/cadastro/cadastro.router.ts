import {Routes} from '@angular/router';
import {FornecedorComponent} from "./fornecedor/fornecedor.component";

export const CadastroRoutes: Routes = [
  {
    path: 'cadastro/fornecedores',
    component: FornecedorComponent,
  }
];
