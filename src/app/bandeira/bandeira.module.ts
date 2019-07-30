import {NgModule} from '@angular/core';
import {BandeiraService} from './bandeira.service';
import {CommonModule} from '@angular/common';
import {BandeiraFormComponent} from './bandeira.form.component';
import {BandeiraListComponent} from './bandeira.list.component';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {ToolbarrModule} from '../toolbar/toolbarr.module';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    CardModule,
    ToolbarrModule
  ],
  declarations: [
    BandeiraFormComponent,
    BandeiraListComponent
  ],
  exports: [
    BandeiraFormComponent,
    BandeiraListComponent
  ],
  providers: [
    BandeiraService
  ]
})
export class BandeiraModule {}
