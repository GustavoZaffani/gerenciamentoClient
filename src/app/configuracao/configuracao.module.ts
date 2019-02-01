import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarrModule} from '../toolbar/toolbarr.module';
import {ConfiguracaoComponent} from './configuracao.component';

@NgModule({

  imports: [
    CommonModule,
    ToolbarrModule
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
