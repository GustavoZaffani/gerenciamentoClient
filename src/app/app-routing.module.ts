import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CalendarioComponent} from './calendario/calendario.component';
import {ConfiguracaoComponent} from './configuracao/configuracao.component';
import {CartaoFormComponent} from './cartao/cartao.form.component';
import {CartaoListComponent} from './cartao/cartao.list.component';
import {ContaListComponent} from './conta/conta.list.component';
import {ContaFormComponent} from './conta/conta.form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'calendario', component: CalendarioComponent},
  {path: 'configuracoes', component: ConfiguracaoComponent},
  {path: 'cartoes', component: CartaoListComponent},
  {path: 'cartoes/form', component: CartaoFormComponent},
  {path: 'contas', component: ContaListComponent},
  {path: 'contas/form', component: ContaFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
