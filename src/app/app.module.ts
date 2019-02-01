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
    CartaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
