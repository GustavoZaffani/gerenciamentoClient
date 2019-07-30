import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CredenciadoraService} from './credenciadora.service';
import {Credenciadora} from './credenciadora';
import {MessageService} from 'primeng/api';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form-credenciadora',
  templateUrl: './credenciadora.form.component.html',
  styleUrls: ['./credenciadora.form.component.css']
})
export class CredenciadoraFormComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  credenciadora: Credenciadora;

  constructor(private credenciadoraService: CredenciadoraService,
              private messageService: MessageService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.credenciadora = new Credenciadora();

    this.route.params
      .subscribe(params => {
        if (params['id']) {
          this.credenciadoraService.findOne(params['id'])
            .subscribe(e => {
              this.credenciadora = e;
            });
        }
      });
  }

  save() {
    this.credenciadoraService.save(this.credenciadora)
      .subscribe(e => {
        this.credenciadora = e;
        this.messageService.add({severity: 'success', summary: 'Registro adicionado com sucesso!'});
      });
  }

  back() {
    window.history.back();
  }
}
