import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Conta} from './conta';
import {ContaService} from './conta.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.list.component.html',
  styleUrls: ['./conta.list.component.css']
})
export class ContaListComponent implements OnInit {

  cols: any[];
  contas: Conta[];

  constructor(private router: Router,
              private contaService: ContaService) {

    this.cols = [
      {path: 'id', header: 'Código'},
      {path: 'descricao', header: 'Descrição'},
      {path: 'vencimento', header: 'Vencimento'},
    ];
  }

  ngOnInit() {
    this.atualizaTabela();
  }

  newConta() {
    this.router.navigate(['contas/form']);
  }

  atualizaTabela() {
    this.contaService.findAll()
      .subscribe(e => {
        this.contas = e;
      });
  }
}
