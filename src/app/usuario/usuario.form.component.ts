import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Usuario} from './usuario';
import {UsuarioService} from './usuario.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './usuario.form.component.html',
  styleUrls: ['./usuario.form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  usuario: Usuario;

  constructor(private usuarioService: UsuarioService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  save() {
    this.usuarioService.save(this.usuario)
      .subscribe(e => {
        this.usuario = e;
        this.messageService.add({severity: 'success', summary: 'Usuário cadastrado com sucesso!'});
      }, error => {
        console.log(error);
        this.messageService.add({severity: 'error', summary: 'Ocorreu um erro ao cadastrar o usuário!'});
      });
  }

  back() {
    console.log('vai voltar');
  }
}
