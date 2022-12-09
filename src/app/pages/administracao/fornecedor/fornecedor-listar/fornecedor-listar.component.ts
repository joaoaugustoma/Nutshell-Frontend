import {Component, OnInit} from '@angular/core';
import {Fornecedor} from "../fornecedor-model/fornecedor.model";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {FornecedorService} from "../fornecedor.service";

@Component({
  selector: 'app-forneceodr-listar',
  templateUrl: './fornecedor-listar.component.html',
  styleUrls: ['./fornecedor-listar.component.scss']
})
export class FornecedorListarComponent implements OnInit {

  constructor(private fornecedorService: FornecedorService, public dialog: MatDialog, private router: Router) {
  }

  @Component({
    selector: 'dialog-animations-example',
    styleUrls: ['dialog-animations-example.css'],
    templateUrl: 'dialog-animations-example.html',
  })


  fornecedores: Fornecedor[] = [];
  displayedColumns = ['id', 'login', 'nome', 'sobrenome', 'acesso', 'status', 'acao']

  ngOnInit(): void {
    this.fornecedorService.list().subscribe((fornecedores: Fornecedor[]) => {
      this.fornecedores = fornecedores;
    })
  }


  disable(id: String): void {
    // this.openDialog("0","0", "Deseja desativar o usuário?");
    this.fornecedorService.disable(id).subscribe(() => {
      this.fornecedorService.showMessage('Pessoa desabilitada com sucesso! ')
      this.ngOnInit()
    })
  }

  enable(id: String): void {
    // this.openDialog("0","0", "Deseja desativar o usuário?");
    this.fornecedorService.enable(id).subscribe(() => {
      this.fornecedorService.showMessage('Pessoa habilitada com sucesso! ')
      this.ngOnInit();
    })
  }

  load() {
    (sessionStorage['refresh'] == 'true' || !sessionStorage['refresh'])
    && location.reload();
    sessionStorage['refresh'] = false;
  }

  // openDialog(enterAnimationDuration: string, exitAnimationDuration: string, msg: String): void {
  //   this.dialog.open(ListDialogComponent, {
  //     width: '250px',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //     data: {
  //       message: msg
  //     }
  //   });
  //
  // }
  //
  // navigate(): void {
  //   this.router.navigate(['/'])
  //   this.router.navigate(['/fornecedores'])
  // }
}
