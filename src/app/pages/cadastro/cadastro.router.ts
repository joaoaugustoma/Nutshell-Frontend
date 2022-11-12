import {Routes} from '@angular/router';
import {LayoutComponent} from "../../layout/layout.component";
import {FornecedorComponent} from "./fornecedor/fornecedor.component";
import {HomeComponent} from "../home/home.component";

export const CadastroRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'fornecedor',
        component: FornecedorComponent
      }
    ]
  }
];
