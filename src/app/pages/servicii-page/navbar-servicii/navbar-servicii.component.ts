import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-servicii',
  templateUrl: './navbar-servicii.component.html',
  styleUrls: ['./navbar-servicii.component.scss']
})
export class NavbarServiciiComponent implements OnInit {

  isCollapsed:boolean;
  constructor() {
    this.isCollapsed=true;
  }

  ngOnInit(): void {
  }

}
