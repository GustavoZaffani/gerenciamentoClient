import {Inject, LOCALE_ID, Pipe, PipeTransform} from "@angular/core";
import {CurrencyPipe} from "@angular/common";

@Pipe({name: 'currencyFormat'})

export class CurrencyFormatPipe implements PipeTransform{

  constructor(@Inject(LOCALE_ID) public locale: string) {

  }
  transform(value: number, locale: string = 'BRL', currency_symbol: 'symbol', number_format: string = '0.2-2'): string {

    if(value != null) {
      const currencyPipe = new CurrencyPipe(this.locale);
      let novo_valor: string;

      novo_valor = currencyPipe.transform(value, locale, currency_symbol, number_format);
      return novo_valor;
    }
  }
}
