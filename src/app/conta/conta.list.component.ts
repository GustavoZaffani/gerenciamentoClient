import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Conta} from './conta';
import {ContaService} from './conta.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.list.component.html',
  styleUrls: ['./conta.list.component.css']
})
export class ContaListComponent implements OnInit {

  cols: any[];
  contas: Conta[];
  contaVencida = true;
  contaDia = false;
  contaPaga = false;

  constructor(private router: Router,
              private contaService: ContaService,
              private messageService: MessageService) {

    this.cols = [
      {path: 'id', header: 'Código'},
      {path: 'descricao', header: 'Descrição'},
      {path: 'dtConta', header: 'Data Conta'},
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

  editar(id: number) {
    this.router.navigate(['contas/form', id]);
  }

  excluir(id: number) {
    this.contaService.delete(id)
      .subscribe(e => {
        this.messageService.add({severity: 'success', summary: 'Registro excluído com sucesso!'});
        this.atualizaTabela();
    });
  }
}
