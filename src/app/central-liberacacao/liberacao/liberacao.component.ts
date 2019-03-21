import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Liberacao} from "./liberacao";
import {LiberacaoService} from "./liberacao.service";
import {UserFilialService} from "../userFilial/userFilial.service";
import {UserFilial} from "../userFilial/userFilial";

@Component({
  selector: 'app-liberacao',
  templateUrl: './liberacao.component.html',
  styleUrls: ['./liberacao.component.css']
})
export class LiberacaoComponent implements OnInit {

  hasLiberacao: boolean;
  usersFilial: UserFilial[];
  liberacao: Liberacao;
  liberacoes: Liberacao[];
  userId: string;
  visible = false;
  estabSelected: string;

  constructor(private router: Router,
              private liberacaoService: LiberacaoService,
              private usuarioFilialService: UserFilialService) {
  }

  ngOnInit() {
    this.liberacao = new Liberacao();
    this.userId = localStorage.getItem('username');
    this.getFiliaisByUser();
    this.loadLiberacoes();
  }

  getFiliaisByUser() {
    this.usuarioFilialService.findFiliaisByUser(this.userId)
      .subscribe(e => {
        this.usersFilial = e;
      });
  }

  openLiberacao(idSolicitacao: number, estab: number) {
    this.router.navigate(['liberacao-detalhe', idSolicitacao, estab]);
  }

  openHome() {
    this.router.navigate(['']);
  }

  showDialog() {
    this.visible = true;
  }

  cleanFilter() {
    this.liberacoes = null;
    this.visible = false;
    localStorage.removeItem('estab');
    this.findAllLiberacoesByUser(this.userId);
  }

  filtrar() {
    if (this.estabSelected) {
      this.findLiberacoesByUserAndEstab(this.userId, this.estabSelected);
      this.visible = false;
    }
  }

  findLiberacoesByUserAndEstab(userId: string, estab: string) {
    this.liberacaoService.findLiberacoesByUserAndEstab(userId, estab)
      .subscribe(e => {
        this.liberacoes = e;
        this.liberacoes.length != 0 ? this.hasLiberacao = true : this.hasLiberacao = false;
      });
  }

  findAllLiberacoesByUser(userId: string) {
    this.liberacaoService.findAllLiberacoesByUser(userId)
      .subscribe(e => {
        this.liberacoes = e;
        this.liberacoes.length != 0 ? this.hasLiberacao = true : this.hasLiberacao = false;
      });
1  }

  setEstabFilter(estab: string) {
    this.estabSelected = estab;
    localStorage.setItem('estab', estab);
  }

  loadLiberacoes() {
    if (localStorage.getItem('estab')) {
      this.findLiberacoesByUserAndEstab(this.userId, localStorage.getItem('estab'));
    } else {
      this.findAllLiberacoesByUser(this.userId);
    }
  }
}
