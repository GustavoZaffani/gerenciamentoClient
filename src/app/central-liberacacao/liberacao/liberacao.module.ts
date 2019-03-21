import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LiberacaoComponent} from "./liberacao.component";
import {ToolbarModule} from "../toolbar/toolbar.module";
import {MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule} from "@angular/material";
import {ButtonModule} from "primeng/button";
import {LiberacaoService} from "./liberacao.service";
import {SidebarModule} from "primeng/primeng";
import {UserFilialService} from "../userFilial/userFilial.service";
import {FormsModule} from "@angular/forms";

@NgModule({

  imports: [
    CommonModule,
    ToolbarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    ButtonModule,
    MatButtonModule,
    SidebarModule,
    FormsModule
  ],

  declarations: [
    LiberacaoComponent
  ],

  exports: [
    LiberacaoComponent
  ],

  providers: [
    LiberacaoService,
    UserFilialService
  ]
})

export class LiberacaoModule {

}
