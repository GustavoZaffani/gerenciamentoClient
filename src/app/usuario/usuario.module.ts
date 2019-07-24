import {NgModule} from '@angular/core';
import {UsuarioService} from './usuario.service';
import {CommonModule} from '@angular/common';
import {UsuarioFormComponent} from './usuario.form.component';
import {UsuarioListComponent} from './usuario.list.component';
import {ToolbarrModule} from '../toolbar/toolbarr.module';
import {CardModule} from 'primeng/card';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    ToolbarrModule,
    CardModule,
    FormsModule,
    ButtonModule
  ],

  declarations: [
    UsuarioFormComponent,
    UsuarioListComponent
  ],

  exports: [
    UsuarioFormComponent,
    UsuarioListComponent
  ],

  providers: [
    UsuarioService
  ]
})

export class UsuarioModule {

}
