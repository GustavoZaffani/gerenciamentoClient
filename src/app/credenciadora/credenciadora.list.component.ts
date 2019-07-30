import {Component, OnInit} from '@angular/core';
import {Credenciadora} from './credenciadora';
import {CredenciadoraService} from './credenciadora.service';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-list-credenciadora',
  templateUrl: './credenciadora.list.component.html',
  styleUrls: ['./credenciadora.list.component.css']
})
export class CredenciadoraListComponent implements OnInit {

  credenciadoras: Credenciadora[];
  cols: any[];

  constructor(private credenciadoraService: CredenciadoraService,
              private messageService: MessageService,
              private router: Router) {

    this.cols = [
      {field: 'id', header: 'Código'},
      {field: 'credenciadora', header: 'Credenciadora'},
      {field: 'cnpj', header: 'CNPJ'}
    ];
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.credenciadoraService.findAll()
      .subscribe(e => {
        this.credenciadoras = e;
      });
  }

  edit(id: number) {
    this.router.navigate(['credenciadora/form', id]);
  }

  delete(id: number) {
    this.credenciadoraService.delete(id)
      .subscribe(e => {
        this.messageService.add({severity: 'success', summary: 'Registro removido com sucesso!'});
        this.findAll();
      }, error => {
        console.log(error);
        this.messageService.add({severity: 'error', summary: 'Ocorreu um erro ao remover o registro!'});
      });
  }

  newCredenciadora() {
    this.router.navigate(['credenciadora/form']);
  }

}
