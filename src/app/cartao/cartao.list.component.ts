import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Cartao} from './cartao';
import {CartaoService} from './cartao.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-list-cartao',
  templateUrl: './cartao.list.component.html',
  styleUrls: ['./cartao.list.component.css']
})
export class CartaoListComponent implements OnInit {

  cols: any[];
  cartoes: Cartao[];

  constructor(private router: Router,
              private cartaoService: CartaoService,
              private messageService: MessageService) {

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

  editar(id: number) {
    this.router.navigate(['cartoes/form', id]);
  }

  excluir(id: number) {
    this.cartaoService.delete(id)
      .subscribe(e => {
        this.messageService.add({severity: 'success', summary: 'Registro excluído com sucesso!'});
        this.atualizaTabela();
      }, error => {
        this.messageService.add({severity: 'warn', summary: 'Cartão já vinculado a uma conta!'});
      });
  }
}
