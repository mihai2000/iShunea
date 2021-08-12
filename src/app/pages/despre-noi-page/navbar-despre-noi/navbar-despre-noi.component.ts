import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-despre-noi',
  templateUrl: './navbar-despre-noi.component.html',
  styleUrls: ['./navbar-despre-noi.component.scss']
})
export class NavbarDespreNoiComponent implements OnInit {

  isCollapsed:boolean;
  constructor() {
    this.isCollapsed=true;
  }

  ngOnInit(): void {
  }

}
