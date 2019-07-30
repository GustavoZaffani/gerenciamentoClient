import { Component, OnInit } from '@angular/core';
import {Bandeira} from './bandeira';
import {BandeiraService} from './bandeira.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-bandeira',
  templateUrl: './bandeira.list.component.html',
  styleUrls: ['./bandeira.list.component.css']
})
export class BandeiraListComponent implements OnInit {

  bandeiras: Bandeira[];
  cols: any[];

  constructor(private bandeiraService: BandeiraService,
              private messageService: MessageService,
              private router: Router) {

    this.cols = [
      {field: 'id', header: 'Código'},
      {field: 'descricao', header: 'Descrição'}
    ];
  }

  ngOnInit() {
    this.findAll();
  }

  newBandeira() {
    this.router.navigate(['bandeira/form']);
  }

  findAll() {
    this.bandeiraService.findAll()
      .subscribe(e => {
        this.bandeiras = e;
      });
  }

  edit(id: number) {
    this.router.navigate(['bandeira/form', id]);
  }

  delete(id: number) {
    this.bandeiraService.delete(id)
      .subscribe(e => {
        this.messageService.add({severity: 'success', summary: 'Registro excluído com sucesso!'});
        this.findAll();
      }, error => {
        console.log(error);
        this.messageService.add({severity: 'error', summary: 'Ocorreu um erro ao excluir o registro!'});
      });
  }
}
