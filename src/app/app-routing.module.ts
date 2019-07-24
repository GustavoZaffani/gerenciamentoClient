import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CalendarioComponent} from './calendario/calendario.component';
import {ConfiguracaoComponent} from './configuracao/configuracao.component';
import {CartaoFormComponent} from './cartao/cartao.form.component';
import {CartaoListComponent} from './cartao/cartao.list.component';
import {ContaListComponent} from './conta/conta.list.component';
import {ContaFormComponent} from './conta/conta.form.component';
import {ExtratoComponent} from './extrato/extrato.component';
import {CredenciadoraListComponent} from './credenciadora/credenciadora.list.component';
import {CredenciadoraFormComponent} from './credenciadora/credenciadora.form.component';
import {LoginComponent} from './login/login.component';
import {LoginService} from './login/login.service';
import {UsuarioFormComponent} from './usuario/usuario.form.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', canActivate: [LoginService], component: HomeComponent},
  {path: 'calendario', canActivate: [LoginService], component: CalendarioComponent},
  {path: 'configuracoes', canActivate: [LoginService], component: ConfiguracaoComponent},
  {path: 'cartoes', canActivate: [LoginService], component: CartaoListComponent},
  {path: 'cartoes/form', canActivate: [LoginService], component: CartaoFormComponent},
  {path: 'cartoes/form/:id', canActivate: [LoginService], component: CartaoFormComponent},
  {path: 'contas', canActivate: [LoginService], component: ContaListComponent},
  {path: 'contas/form', canActivate: [LoginService], component: ContaFormComponent},
  {path: 'contas/form/:id', canActivate: [LoginService], component: ContaFormComponent},
  {path: 'extrato', canActivate: [LoginService], component: ExtratoComponent},
  {path: 'credenciadora', canActivate: [LoginService], component: CredenciadoraListComponent},
  {path: 'credenciadora/form', canActivate: [LoginService], component: CredenciadoraFormComponent},
  {path: 'usuario/form', canActivate: [LoginService], component: UsuarioFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
