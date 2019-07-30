import {Component, OnInit, ViewChild} from '@angular/core';
import {CartaoService} from '../cartao/cartao.service';
import {Cartao} from '../cartao/cartao';
import {Conta} from './conta';
import {NgForm} from '@angular/forms';
import {ContaService} from './conta.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ActivatedRoute} from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-conta-form',
  templateUrl: './conta.form.component.html',
  styleUrls: ['./conta.form.component.css']
})
export class ContaFormComponent implements OnInit {

  vencimento: string;
  conta: Conta;
  cartoesList: Cartao[];
  vencimentoDisabled = false;
  cartaoDisabled = true;
  parcelasDisabled = true;
  @ViewChild('form') form: NgForm;

  constructor(private cartaoService: CartaoService,
              private contaService: ContaService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.conta = new Conta();
    // TODO necessário verificar a data
    this.conta.dtConta = moment(new Date()).format('DD/MM/YYYY');
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

  vencimentoEqualsConta() {
    if (this.conta.dtConta) {
      this.conta.vencimento = this.conta.dtConta;
    }
  }

  tipoSelected() {
    if (this.conta.tipoPagamento === 'C') {
      this.cartaoDisabled = false;
      this.parcelasDisabled = false;
    } else {
      this.vencimentoEqualsConta();
      this.conta.cartao = null;
      this.cartaoDisabled = true;
      this.parcelasDisabled = true;
      this.vencimentoDisabled = false;
    }
  }

  validaValor() {
    if (this.conta.cartao) {
      if (this.conta.valor > this.conta.cartao.limite) {
        this.confirmationService.confirm({
          message: 'O valor da conta é maior que o limite atual do cartão! Deseja continuar?',
          acceptLabel: 'Sim',
          rejectLabel: 'Não',
          header: 'Atenção',
          reject: () => {
            this.conta.valor = null;
          }
        });
        // this.messageService.add({severity: 'warn', summary: 'Valor maior que limite do cartão!'});
      }
    }
  }

  cartaoSelected() {
    if (this.conta.cartao.tipo === 'C') {
      const vencimento = new Date();
      vencimento.setDate(this.conta.cartao.vencimento);

      if (new Date().getDate() >= this.conta.cartao.melhorData) {
        vencimento.setMonth(vencimento.getMonth() + 2);
      } else {
        vencimento.setMonth(vencimento.getMonth() + 1);
      }
      this.conta.vencimento = moment(vencimento).format('DD/MM/YYYY');
      this.vencimentoDisabled = true;
    } else {
      this.vencimentoEqualsConta();
    }
  }

  save() {
    console.log(this.conta);
    this.contaService.save(this.conta)
      .subscribe(e => {
        this.conta = e;
        this.messageService.add({severity: 'success', summary: 'Registro salvo com sucesso'});
        setTimeout(() => {
          this.back();
        }, 1500);
      });
  }

  back() {
    window.history.back();
  }
}
