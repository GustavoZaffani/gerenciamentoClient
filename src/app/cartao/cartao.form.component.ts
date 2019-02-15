import {Component, OnInit, ViewChild} from '@angular/core';
import {Cartao} from './cartao';
import {NgForm} from '@angular/forms';
import {CartaoService} from './cartao.service';
import {ActivatedRoute} from '@angular/router';

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

  @ViewChild('form') form: NgForm;

  constructor(private cartaoService: CartaoService,
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
      });

    this.back();
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
}
