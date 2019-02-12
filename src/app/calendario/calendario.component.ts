import { Component, OnInit } from '@angular/core';
import {ContaService} from '../conta/conta.service';
import {Conta} from '../conta/conta';
import {CalendarioService} from './calendario.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  events: any[];
  options: any;

  conta: Conta[];

  constructor(private contaService: ContaService,
              private calendarioService: CalendarioService) { }

  ngOnInit() {

    this.contaService.findAll()
      .subscribe(e => {
        this.conta = e;
      });

    // this.calendarioService.getEvents().then(events => {this.events = events;});

    this.options = {
      defaultDate: '2019-02-01',
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      editable: true
    };

  }

}
