import { Component, OnInit } from '@angular/core';
import {FornecedorModel} from "../../../../shared/models/Fornecedor.model";
import {FornecedorService} from "../fornecedor.service";

@Component({
  selector: 'app-fornecedor-filtrar',
  templateUrl: './fornecedor-filtrar.component.html',
  styleUrls: ['./fornecedor-filtrar.component.scss']
})
export class FornecedorFiltrarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
