import {Component, OnInit, ViewChild} from '@angular/core';
import {Cartao} from './cartao';
import {NgForm} from '@angular/forms';
import {CartaoService} from './cartao.service';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.form.component.html',
  styleUrls: ['./cartao.form.component.css']
})
export class CartaoFormComponent implements OnInit {

  cartao: Cartao;
  cartoes: Cartao[];

  @ViewChild('form') form: NgForm;
  constructor(private cartaoService: CartaoService) { }

  ngOnInit() {
    this.cartao = new Cartao();
    this.cartaoService.findAll()
      .subscribe(e => {
        this.cartoes = e;
        console.log(this.cartoes);
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
