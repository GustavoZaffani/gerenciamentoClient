import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarrModule} from '../toolbar/toolbarr.module';
import {ConfiguracaoComponent} from './configuracao.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

@NgModule({

  imports: [
    CommonModule,
    ToolbarrModule,
    CardModule,
    ButtonModule
  ],
  declarations: [
    ConfiguracaoComponent
  ],
  exports: [
    ConfiguracaoComponent
  ]
})

export class ConfiguracaoModule {
}
