import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';
import {ExtratoComponent} from './extrato.component';
import {ToolbarrModule} from '../toolbar/toolbarr.module';
import {AutoCompleteModule, CalendarModule} from 'primeng/primeng';
import {CartaoService} from '../cartao/cartao.service';
import {ContaService} from '../conta/conta.service';

@NgModule ({

  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    CardModule,
    ToolbarrModule,
    CalendarModule,
    AutoCompleteModule
  ],

  declarations: [
    ExtratoComponent
  ],

  exports: [
    ExtratoComponent
  ],

  providers: [
    CartaoService,
    ContaService
  ]
})

export class ExtratoModule {
}
