import { Component, OnInit } from '@angular/core';
import {Usuario} from './usuario';
import {UsuarioService} from './usuario.service';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './usuario.list.component.html',
  styleUrls: ['./usuario.list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios: Usuario[];
  cols: any[];

  constructor(private usuarioService: UsuarioService,
              private router: Router,
              private messageService: MessageService) {

    this.cols = [
      {field: 'id', header: 'Códigio'},
      {field: 'nome', header: 'Nome'},
      {field: 'usuario', header: 'Usuário'}
    ];
  }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.usuarioService.findAll()
      .subscribe(e => {
        this.usuarios = e;
      });
  }

  edit(id: number) {
    this.router.navigate(['usuario/form', id]);
  }

  delete(id: number) {
    this.usuarioService.delete(id)
      .subscribe(e => {
        this.messageService.add({severity: 'success', summary: 'Registro excluído com sucesso!'});
        this.findAll();
      }, error => {
        console.log(error);
        this.messageService.add({severity: 'error', summary: 'Ocorreu um erro ao excluir o registro!'});
      });
  }

  newUser() {
    this.router.navigate(['usuario/form']);
  }
}
