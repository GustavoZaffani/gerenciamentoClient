import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  display = false;
  display1 = false;

  constructor() {
  }

  ngOnInit() {
  }

  openMenu2() {
    this.display = false;
    this.display1 = true;
  }
}
