import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {LoginService} from './login.service';
import {CardModule} from 'primeng/card';
import {FormsModule} from '@angular/forms';
import {ButtonModule, DropdownModule, InputTextModule} from 'primeng/primeng';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

@NgModule({

  imports: [
    CommonModule,
    CardModule,
    MatCardModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    RouterModule,
    ButtonModule,
    MatButtonModule
  ],

  declarations: [
    LoginComponent
  ],

  exports: [
    LoginComponent
  ],

  providers: [
    LoginService
  ]

})

export class LoginModule {

}
