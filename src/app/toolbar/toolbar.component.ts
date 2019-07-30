import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.setUserLogado();
  }

  logout() {
    this.loginService.logout();
  }

  setUserLogado() {
    const userLogado = localStorage.getItem('username');
    document.getElementById('user-logado').textContent = userLogado;
  }
}
