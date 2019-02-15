import { Component, OnInit } from '@angular/core';
import {CartaoService} from '../cartao/cartao.service';
import {Cartao} from '../cartao/cartao';
import {Extrato} from './extrato';
import {Conta} from '../conta/conta';
import {ContaService} from '../conta/conta.service';
import * as moment from 'moment';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  cartaoList: Cartao[];
  extrato: Extrato;
  conta: Conta[];

  constructor(private cartaoService: CartaoService,
              private contaService: ContaService) { }

  ngOnInit() {
  }

  findCartoes($event) {
    this.cartaoService.complete($event.query)
      .subscribe(e => {
        this.cartaoList = e;
      });
  }

  // TODO método que irá filtrar as contas, de acordo com os filtros
  filtrar() {
    this.contaService.findAll()
      .subscribe(e => {
        this.conta = e;
        console.log(this.conta);
      });

    this.extrato.data = moment(new Date()).format('DD/MM/YYYY');

    this.cartaoService.findOne(1)
      .subscribe(e => {
        this.extrato.cartao = e;
      });

    console.log(this.extrato.data);
    console.log(this.extrato.cartao);
    this.contaService.findContasByFiltro(this.extrato.cartao, this.extrato.data)
      .subscribe( e => {
        this.conta = e;
        console.log(this.conta);
      });
  }
}
