import {Component, OnInit, ViewChild} from '@angular/core';
import {CartaoService} from '../cartao/cartao.service';
import {Cartao} from '../cartao/cartao';
import {Conta} from './conta';
import {NgForm} from '@angular/forms';
import {ContaService} from './conta.service';
import {MessageService} from 'primeng/api';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-conta-form',
  templateUrl: './conta.form.component.html',
  styleUrls: ['./conta.form.component.css']
})
export class ContaFormComponent implements OnInit {

  conta: Conta;
  cartoesList: Cartao[];
  vencimentoDisabled = false;
  cartaoDisabled = true;
  parcelasDisabled = true;
  @ViewChild('form') form: NgForm;

  constructor(private cartaoService: CartaoService,
              private contaService: ContaService,
              private messageService: MessageService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.conta = new Conta();

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.contaService.findOne(params['id'])
          .subscribe(e => {
            this.conta = e;
          });
      }
    });

  }

  findCartoes($event) {
    this.cartaoService.complete($event.query)
      .subscribe(e => {
        this.cartoesList = e;
      });
  }

  setVencimento() {
    console.log(this.conta.dtConta);
    if (!this.conta.vencimento) {
      this.conta.vencimento = this.conta.dtConta;
      this.vencimentoDisabled = true;
    }
  }

  tipoSelected() {
    if (this.conta.tipoPagamento === 'C') {
      this.cartaoDisabled = false;
      this.parcelasDisabled = false;
    } else {
      this.cartaoDisabled = true;
      this.parcelasDisabled = true;
      this.vencimentoDisabled = false;
    }
  }

  validaValor() {
    if (this.conta.cartao) {
      if (this.conta.valor > this.conta.cartao.limite) {
        this.messageService.add({severity: 'warn', summary: 'Valor maior que limite do cartão!'});
        this.conta.valor = null;
      }
    }
  }

  cartaoSelected() {
    this.conta.vencimento = this.conta.cartao.vencimento;
    this.vencimentoDisabled = true;
  }

  save() {
    console.log(this.conta);
    this.contaService.save(this.conta)
      .subscribe(e => {
        this.conta = e;
        this.messageService.add({severity: 'success', summary: 'Salvo com sucesso'});
        setTimeout(() => {
          this.back();
        }, 1500);
      });
  }

  back() {
    window.history.back();
  }
}
