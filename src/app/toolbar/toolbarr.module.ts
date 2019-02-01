import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarComponent} from './toolbar.component';
import {ButtonModule, ToolbarModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {SidenavModule} from '../sidenav/sidenav.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    SidenavModule
  ],
  declarations: [
    ToolbarComponent
  ],
  exports: [
    ToolbarComponent
  ]
})

export class ToolbarrModule {}
