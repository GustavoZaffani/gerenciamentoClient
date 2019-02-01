import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {CommonModule} from '@angular/common';
import {SidenavModule} from '../sidenav/sidenav.module';
import {ToolbarrModule} from '../toolbar/toolbarr.module';

@NgModule({
  imports: [
    CommonModule,
    SidenavModule,
    ToolbarrModule
  ],

  declarations: [
    HomeComponent
  ],

  exports: [
    HomeComponent
  ]
})

export class HomeModule {
}
