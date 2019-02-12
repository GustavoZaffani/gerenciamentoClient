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
}
