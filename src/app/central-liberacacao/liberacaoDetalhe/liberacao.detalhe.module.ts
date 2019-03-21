import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ToolbarModule} from "../toolbar/toolbar.module";
import {MatCardModule, MatIconModule, MatToolbarModule} from "@angular/material";
import {ButtonModule} from "primeng/button";
import {LiberacaoDetalhesComponent} from "./liberacao.detalhes.component";
import {LiberacaoDetalheService} from "./liberacao.detalhe.service";

@NgModule({

  imports: [
    CommonModule,
    ToolbarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    ButtonModule
  ],

  declarations: [
    LiberacaoDetalhesComponent
  ],

  exports: [
    LiberacaoDetalhesComponent
  ],

  providers: [
    LiberacaoDetalheService
  ]
})

export class LiberacaoDetalheModule {

}
