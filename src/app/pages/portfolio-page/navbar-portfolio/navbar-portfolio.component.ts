import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-portfolio',
  templateUrl: './navbar-portfolio.component.html',
  styleUrls: ['./navbar-portfolio.component.scss']
})
export class NavbarPortfolioComponent implements OnInit {

  isCollapsed:boolean;
  constructor() {
    this.isCollapsed=true;
  }

  ngOnInit(): void {
  }

}
