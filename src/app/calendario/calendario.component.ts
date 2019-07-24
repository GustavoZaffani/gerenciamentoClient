import { Component, OnInit } from '@angular/core';
import {ContaService} from '../conta/conta.service';
import {Conta} from '../conta/conta';
import {CalendarioService} from './calendario.service';
import {MessageService} from 'primeng/api';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})

export class CalendarioComponent implements OnInit {

  events: any[];
  options: any;
  data: any;

  conta: Conta[];

  constructor(private contaService: ContaService,
              private calendarioService: CalendarioService,
              private messageService: MessageService) {
  }

  ngOnInit() {

    // this.data = {
    //   labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
    //   datasets: [
    //     {
    //       label: 'Cartão 1',
    //       data: [650.00, 350.90, 152.99, 1200.00, 500.00, 800.00, 560.00],
    //       fill: false,
    //       borderColor: '#4bc0c0'
    //     },
    //     {
    //       label: 'Cartão 2',
    //       data: [28, 48, 40, 19, 86, 27, 90],
    //       fill: false,
    //       borderColor: '#565656'
    //     },
    //     {
    //       label: 'Cartão 3',
    //       data: [37, 41, 95, 23, 41, 20, 48],
    //       fill: false,
    //       borderColor: '#830200'
    //     }
    //   ]
    // };


    // selectData(event) {
    //   this.messageService.add({severity: 'info',
    //     summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
    // }

    this.contaService.findAll()
      .subscribe(e => {
        this.conta = e;
      });

    this.events = [
      {
        'title': 'All Day Event',
        'start': '2019-04-01'
      },
      {
        'title': 'Long Event',
        'start': '2019-04-07',
        'end': '2019-04-10'
      },
      {
        'title': 'Repeating Event',
        'start': '2019-04-09T16:00:00'
      },
      {
        'title': 'Repeating Event',
        'start': '2019-04-16T16:00:00'
      },
      {
        'title': 'Conference',
        'start': '2019-04-11',
        'end': '2019-04-13'
      }
    ];

    this.options = {
      defaultDate: '2019-04-01',
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      }
    };

    // this.calendarioService.getEvents().then(events => {
    //   this.events = events;
    // });

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: '2019-02-01',
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: true
    };
  }
}
