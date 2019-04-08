import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarioComponent} from './calendario.component';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {ToolbarrModule} from '../toolbar/toolbarr.module';
import {ContaService} from '../conta/conta.service';
import {ChartModule,  TabViewModule} from 'primeng/primeng';
import {CalendarioService} from './calendario.service';

@NgModule({

  imports: [
    CommonModule,
    FullCalendarModule,
    ToolbarrModule,
    TabViewModule,
    ChartModule
  ],
  declarations: [
    CalendarioComponent
  ],
  exports: [
    CalendarioComponent
  ],
  providers: [
    ContaService,
    CalendarioService
  ]
})

export class CalendarioModule {
}
