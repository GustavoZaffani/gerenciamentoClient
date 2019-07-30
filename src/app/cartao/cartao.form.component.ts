import {Component, OnInit, ViewChild} from '@angular/core';
import {Cartao} from './cartao';
import {NgForm} from '@angular/forms';
import {CartaoService} from './cartao.service';
import {ActivatedRoute} from '@angular/router';
import {Credenciadora} from '../credenciadora/credenciadora';
import {CredenciadoraService} from '../credenciadora/credenciadora.service';
import {BandeiraService} from '../bandeira/bandeira.service';
import {Bandeira} from '../bandeira/bandeira';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.form.component.html',
  styleUrls: ['./cartao.form.component.css']
})
export class CartaoFormComponent implements OnInit {

  cartao: Cartao;
  cartoes: Cartao[];
  enabledObrigaMelhorData = false;
  enabledObrigaVencimento = false;
  disabledMelhorData = true;
  disabledVencimento = true;
  credenciadoraList: Credenciadora[];
  bandeirasList: Bandeira[];

  @ViewChild('form') form: NgForm;

  constructor(private cartaoService: CartaoService,
              private messageService: MessageService,
              private credenciadoraService: CredenciadoraService,
              private bandeiraService: BandeiraService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.cartao = new Cartao();

    this.route.params
      .subscribe(params => {
        if (params['id']) {
          this.cartaoService.findOne(params['id'])
            .subscribe(e => {
              this.cartao = e;
              this.validaTipoCartao();
            });
        }
      });
  }

  save() {
    this.cartaoService.save(this.cartao)
      .subscribe(e => {
        this.cartao = e;
        this.messageService.add({severity: 'success', summary: 'Registro salvo com sucesso!'});
      });
    setTimeout(() => {
      this.back();
    }, 1500);
  }

  back() {
    window.history.back();
  }

  validaTipoCartao() {
    if (this.cartao.tipo === 'C') {
      this.disabledMelhorData = false;
      this.disabledVencimento = false;
      this.enabledObrigaMelhorData = true;
      this.enabledObrigaVencimento = true;
    } else {
      this.cartao.vencimento = null;
      this.cartao.melhorData = null;
      this.disabledMelhorData = true;
      this.disabledVencimento = true;
      this.enabledObrigaMelhorData = false;
      this.enabledObrigaVencimento = false;
    }
  }

  findCredenciadoras($event: any) {
    this.credenciadoraService.complete($event.query)
      .subscribe(e => {
        this.credenciadoraList = e;
      });
  }

  credenciadoraSelected() {
    this.cartao.cnpj = this.cartao.credenciadora.cnpj;
  }

  findBandeiras($event: any) {
    this.bandeiraService.complete($event.query)
      .subscribe(e => {
        this.bandeirasList = e;
      });
  }
}
