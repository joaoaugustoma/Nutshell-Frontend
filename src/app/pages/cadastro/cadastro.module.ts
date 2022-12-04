import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FornecedorFiltrarComponent} from "./fornecedor/fornecedor-filtrar/fornecedor-filtrar.component";
import {FornecedorEditarComponent} from "./fornecedor/fornecedor-editar/fornecedor-editar.component";
import {FornecedorListarComponent} from "./fornecedor/fornecedor-listar/fornecedor-listar.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    FornecedorFiltrarComponent,
    FornecedorEditarComponent,
    FornecedorListarComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FlexModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class CadastroModule { }
