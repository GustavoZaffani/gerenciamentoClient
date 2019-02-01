import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarioComponent} from './calendario.component';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {ToolbarrModule} from '../toolbar/toolbarr.module';

@NgModule({

  imports: [
    CommonModule,
    FullCalendarModule,
    ToolbarrModule
  ],
  declarations: [
    CalendarioComponent
  ],
  exports: [
    CalendarioComponent
  ]
})

export class CalendarioModule {
}
