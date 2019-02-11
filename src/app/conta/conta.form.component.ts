import {Component, OnInit, ViewChild} from '@angular/core';
import {CartaoService} from '../cartao/cartao.service';
import {Cartao} from '../cartao/cartao';
import {Conta} from './conta';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {ContaService} from './conta.service';

@Component({
  selector: 'app-conta-form',
  templateUrl: './conta.form.component.html',
  styleUrls: ['./conta.form.component.css']
})
export class ContaFormComponent implements OnInit {

  conta: Conta;
  cartoesList: Cartao[];
  vencimentoDisabled = false;
  @ViewChild('form') form: NgForm;

  constructor(private cartaoService: CartaoService,
              private contaService: ContaService,
              private router: Router) {
  }

  ngOnInit() {
    this.conta = new Conta();
  }

  findCartoes($event) {
    this.cartaoService.complete($event.query)
      .subscribe(e => {
        this.cartoesList = e;
      });
  }

  cartaoSelected() {
    this.conta.vencimento = this.conta.cartao.vencimento;
    this.vencimentoDisabled = true;
  }

  save() {
    this.contaService.save(this.conta)
      .subscribe(e => {
        this.conta = e;
      });
  }

  back() {
    window.history.back();
  }
}
