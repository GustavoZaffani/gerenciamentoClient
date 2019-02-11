import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarrModule} from '../toolbar/toolbarr.module';
import {ContaListComponent} from './conta.list.component';
import {ContaFormComponent} from './conta.form.component';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {AutoCompleteModule, CalendarModule} from 'primeng/primeng';
import {ContaService} from './conta.service';
import {CartaoService} from '../cartao/cartao.service';

@NgModule({

  imports: [
    CommonModule,
    ToolbarrModule,
    FormsModule,
    ButtonModule,
    TableModule,
    CardModule,
    AutoCompleteModule,
    CalendarModule
  ],

  declarations: [
    ContaListComponent,
    ContaFormComponent
  ],

  exports: [
    ContaListComponent,
    ContaFormComponent
  ],

  providers: [
    ContaService,
    CartaoService
  ]
})

export class ContaModule {
}
