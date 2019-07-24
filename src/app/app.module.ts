import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToolbarrModule} from './toolbar/toolbarr.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidenavModule} from './sidenav/sidenav.module';
import {HomeModule} from './home/home.module';
import {CalendarioModule} from './calendario/calendario.module';
import {ConfiguracaoModule} from './configuracao/configuracao.module';
import {CartaoModule} from './cartao/cartao.module';
import {ContaModule} from './conta/conta.module';
import {GrowlModule} from 'primeng/growl';
import {MessageService} from 'primeng/api';
import {ExtratoModule} from './extrato/extrato.module';
import {CredenciadoraModule} from './credenciadora/credenciadora.module';
import {LoginModule} from './login/login.module';
import {LoginService} from './login/login.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpClientInterceptor} from './http-client.interceptor';
import {UsuarioModule} from './usuario/usuario.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    AppRoutingModule,
    ToolbarrModule,
    SidenavModule,
    CalendarioModule,
    ConfiguracaoModule,
    CartaoModule,
    ContaModule,
    GrowlModule,
    ExtratoModule,
    CredenciadoraModule,
    LoginModule,
    UsuarioModule
  ],
  providers: [
    MessageService,
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
