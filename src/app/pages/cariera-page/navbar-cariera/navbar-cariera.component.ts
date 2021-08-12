import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-cariera',
  templateUrl: './navbar-cariera.component.html',
  styleUrls: ['./navbar-cariera.component.scss']
})
export class NavbarCarieraComponent implements OnInit {

  isCollapsed:boolean;
  constructor() {
    this.isCollapsed=true;
  }


  ngOnInit(): void {
  }

}
