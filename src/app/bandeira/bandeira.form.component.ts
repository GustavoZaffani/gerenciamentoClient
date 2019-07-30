import {Component, OnInit, ViewChild} from '@angular/core';
import {BandeiraService} from './bandeira.service';
import {Bandeira} from './bandeira';
import {NgForm} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form-bandeira',
  templateUrl: './bandeira.form.component.html',
  styleUrls: ['./bandeira.form.component.css']
})
export class BandeiraFormComponent implements OnInit {

  bandeira: Bandeira;
  @ViewChild('form') form: NgForm;

  constructor(private bandeiraService: BandeiraService,
              private messageService: MessageService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.bandeira = new Bandeira();
    this.route.params
      .subscribe(params => {
        if (params['id']) {
          this.bandeiraService.findOne(params['id'])
            .subscribe(e => {
              this.bandeira = e;
            });
        }
      });
  }

  save() {
    this.bandeiraService.save(this.bandeira)
      .subscribe(e => {
        this.bandeira = e;
        this.messageService.add({severity: 'success', summary: 'Registro salvo com sucesso!'});
      }, error => {
        console.log(error);
        this.messageService.add({severity: 'error', summary: 'Ocorreu um erro ao salvar o registro!'});
      });
  }

  back() {
    window.history.back();
  }
}
