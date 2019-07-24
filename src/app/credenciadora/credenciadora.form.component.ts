import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CredenciadoraService} from './credenciadora.service';
import {Credenciadora} from './credenciadora';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-form-credenciadora',
  templateUrl: './credenciadora.form.component.html',
  styleUrls: ['./credenciadora.form.component.css']
})
export class CredenciadoraFormComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  credenciadora: Credenciadora;

  constructor(private credenciadoraService: CredenciadoraService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.credenciadora = new Credenciadora();
  }

  save() {
    this.credenciadoraService.save(this.credenciadora)
      .subscribe(e => {
        this.credenciadora = e;
        this.messageService.add({severity: 'success', summary: 'Registro adicionado com sucesso!'});
      });
  }

  back() {
    console.log('vai voltar esse krl');
  }
}
