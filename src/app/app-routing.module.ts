import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CalendarioComponent} from './calendario/calendario.component';
import {ConfiguracaoComponent} from './configuracao/configuracao.component';
import {CartaoFormComponent} from './cartao/cartao.form.component';
import {CartaoListComponent} from './cartao/cartao.list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'calendario', component: CalendarioComponent},
  {path: 'configuracoes', component: ConfiguracaoComponent},
  {path: 'cartoes', component: CartaoListComponent},
  {path: 'cartoes/form', component: CartaoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
