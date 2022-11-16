import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CadastroRoutes} from "./pages/cadastro/cadastro.router";
import {HomeRoutes} from "./pages/home/home.router";

const routes: Routes = [
  ...HomeRoutes,
  ...CadastroRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
