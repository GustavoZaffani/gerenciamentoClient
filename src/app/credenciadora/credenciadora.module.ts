import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarrModule} from '../toolbar/toolbarr.module';
import {CredenciadoraFormComponent} from './credenciadora.form.component';
import {CredenciadoraListComponent} from './credenciadora.list.component';
import {CardModule} from 'primeng/card';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {CredenciadoraService} from './credenciadora.service';
import {TableModule} from 'primeng/table';
import {CpfCnpjPipeModule} from '../pipe/cpfCnpj/cpfCnpj.pipe.module';

@NgModule({

  imports: [
    CommonModule,
    ToolbarrModule,
    CardModule,
    FormsModule,
    ButtonModule,
    TableModule,
    CpfCnpjPipeModule
  ],
  declarations: [
    CredenciadoraListComponent,
    CredenciadoraFormComponent
  ],
  exports: [
    CredenciadoraListComponent,
    CredenciadoraFormComponent
  ],
  providers: [
    CredenciadoraService
  ]
})

export class CredenciadoraModule {

}
