import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Cartao} from './cartao';
import {CartaoService} from './cartao.service';

@Component({
  selector: 'app-list-cartao',
  templateUrl: './cartao.list.component.html',
  styleUrls: ['./cartao.list.component.css']
})
export class CartaoListComponent implements OnInit {

  cols: any[];
  cartoes: Cartao[];

  constructor(private router: Router,
              private cartaoService: CartaoService) {

    this.cols = [
      {field: 'id', header: 'Código'},
      {field: 'descricao', header: 'Descrição'},
      {field: 'credenciadora', header: 'Credenciadora'},
      {field: 'bandeira', header: 'Bandeira'},
      {field: 'vencimento', header: 'Vencimento'}
    ];
  }

  ngOnInit() {
    this.atualizaTabela();
  }

  novoCartao() {
    this.router.navigate(['cartoes/form']);
  }

  atualizaTabela() {
    this.cartaoService.findAll()
      .subscribe(e => {
        this.cartoes = e;
      });
  }
}
