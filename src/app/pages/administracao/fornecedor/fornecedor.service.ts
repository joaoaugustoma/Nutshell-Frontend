import {Injectable} from '@angular/core';
import {catchError, EMPTY, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Fornecedor} from "./fornecedor-model/fornecedor.model";

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  baseUrl = "http://localhost:8080/api/v1/fornecedores";

  constructor(private http:HttpClient, private snackBar : MatSnackBar) { }


  create(fornecedor: Fornecedor) : Observable<Fornecedor> {
    return this.http.post(this.baseUrl,fornecedor).pipe(
      map((obj) =>obj),
      catchError(e=> this.errorHandler(e))
    );
  }

  list() : Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.baseUrl);
  }

  // @ts-ignore
  disable (id : String) :Observable<Fornecedor> {
    const url = `${this.baseUrl+"/status/inactivate"}/${id}`
    return this.http.put<Fornecedor>(url,{}).pipe(
      map((obj)=>obj),
      catchError(e =>this.errorHandler(e))
    );
  }

  enable (id : String) :Observable<Fornecedor> {
    const url = `${this.baseUrl+"/status/activate"}/${id}`
    return this.http.put<Fornecedor>(url,{}).pipe(
      map((obj)=>obj),
      catchError(e =>this.errorHandler(e))
    );
  }

  findById(id: string):Observable<Fornecedor> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Fornecedor>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(fornecedor: Fornecedor):Observable<Fornecedor> {
    const url = `${this.baseUrl}/${fornecedor.idPessoa}`
    return this.http.put<Fornecedor>(url,fornecedor).pipe(
      map((obj)=>obj),
      catchError(e =>this.errorHandler(e))
    );
  }

  showMessage(msg: string, isError : boolean =false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }

  errorHandler(e: any) : Observable<any> {
    this.showMessage(e.error.message, true)
    return EMPTY
  }
}
