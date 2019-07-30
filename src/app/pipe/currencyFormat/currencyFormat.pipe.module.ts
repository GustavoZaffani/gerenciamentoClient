import {LOCALE_ID, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CurrencyFormatPipe} from "./currencyFormat.pipe";
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CurrencyFormatPipe
  ],
  exports: [
    CurrencyFormatPipe
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' }
  ]
})
export class CurrencyFormatPipeModule {}
