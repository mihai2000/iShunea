import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-contacte',
  templateUrl: './navbar-contacte.component.html',
  styleUrls: ['./navbar-contacte.component.scss']
})
export class NavbarContacteComponent implements OnInit {

  isCollapsed:boolean;
  constructor() {
    this.isCollapsed=true;
  }


  ngOnInit(): void {
  }

}
