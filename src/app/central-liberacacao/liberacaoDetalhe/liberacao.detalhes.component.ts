import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LiberacaoDetalheService} from "./liberacao.detalhe.service";
import {LiberacaoDetalhe} from "./liberacao.detalhe";

@Component({
  selector: 'app-liberacao-detalhe',
  templateUrl: './liberacao.detalhes.component.html',
  styleUrls: ['./liberacao.detalhes.component.css']
})
export class LiberacaoDetalhesComponent implements OnInit {

  showDetalhes = false;
  liberacaoDet: LiberacaoDetalhe;
  estab: string;
  idLibProc: number;

  constructor(private router: Router,
              private liberacaoDetalheService: LiberacaoDetalheService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.liberacaoDet = new LiberacaoDetalhe();
    this.loadParamsUrl();
    this.findLiberacaoDet(this.idLibProc, this.estab);
  }

  loadParamsUrl() {
    this.route.params.subscribe(params => {
      if (params['id'] && params['estab']) {
        this.idLibProc = params['id'];
        this.estab = params['estab'];
      }
    });
  }

  back() {
    window.history.back();
  }

  openDetalhes() {
    if (this.showDetalhes) {
      this.showDetalhes = false;
    } else this.showDetalhes = true;
  }

  openMotivo(liberaNega: boolean) {
    if (liberaNega) {
      this.router.navigate(['motivo', this.liberacaoDet.idLibProc, "S"]);
    } else {
      this.router.navigate(['motivo', this.liberacaoDet.idLibProc, "N"]);
    }
  }

  findLiberacaoDet(idSolic: number, estab: string) {
    let userId = localStorage.getItem('username');
    this.liberacaoDetalheService.findDetalheLiberacao(idSolic, estab, userId)
      .subscribe(e => {
        this.liberacaoDet = e;
        this.verificaOrigem();
        this.verificaSituacao();
      });
  }

  verificaSituacao() {
    let situacao = this.liberacaoDet.situacao;
    if (situacao == "N") {
      this.liberacaoDet.situacao = "Negada";
    } else if (situacao == "S") {
      this.liberacaoDet.situacao = "Liberada";
    } else {
      this.liberacaoDet.situacao = "Pendente";
    }
  }

  verificaOrigem() {
    let origem = this.liberacaoDet.origem;
    if (origem == "B") {
      this.liberacaoDet.origem = "Baixa de Duplicata";
    } else if (origem == "N") {
      this.liberacaoDet.origem = "Nota";
    } else if (origem == "C") {
      this.liberacaoDet.origem = "Carrinho";
    } else if (origem == "P") {
      this.liberacaoDet.origem = "Pedido";
    } else if (origem == "H") {
      this.liberacaoDet.origem = "Horas Manutenção (Frota)";
    } else if (origem == "E") {
      this.liberacaoDet.origem = "Expedição";
    }
  }
}
