import { Component, OnInit } from '@angular/core';
import {Usuario} from '../usuario/usuario';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;

  constructor(private loginService: LoginService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit() {
    this.loginService.logout();
    this.usuario = new Usuario();
  }

  login() {
    this.loginService.login(this.usuario)
      .subscribe(e => {
        localStorage.setItem('token', e);
        console.log(e);
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.messageService.add({severity: 'error', summary: 'Atenção', detail: 'Usuário e/ou senha incorretos'});
      });
  }
}
