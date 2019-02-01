import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccordionModule, ButtonModule, SidebarModule, ToolbarModule} from 'primeng/primeng';
import {SidenavComponent} from './sidenav.component';

@NgModule({

  imports: [
    CommonModule,
    AccordionModule,
    SidebarModule,
    ButtonModule,
    ToolbarModule
  ],
  declarations: [
    SidenavComponent
  ],
  exports: [
    SidenavComponent
  ],
  providers: []
})

export class SidenavModule {}
