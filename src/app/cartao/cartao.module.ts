import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarrModule} from '../toolbar/toolbarr.module';
import {CartaoFormComponent} from './cartao.form.component';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CartaoListComponent} from './cartao.list.component';
import {TableModule} from 'primeng/table';
import {AutoCompleteModule, CalendarModule} from 'primeng/primeng';
import {CartaoService} from './cartao.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({

  imports: [
    CommonModule,
    ToolbarrModule,
    FormsModule,
    ButtonModule,
    CardModule,
    TableModule,
    CalendarModule,
    HttpClientModule,
    AutoCompleteModule
  ],

  declarations: [
    CartaoFormComponent,
    CartaoListComponent
  ],

  exports: [
    CartaoFormComponent,
    CartaoListComponent
  ],
  providers: [
    CartaoService
  ]
})

export class CartaoModule {
}
