import { Component, OnInit } from '@angular/core';
import {$} from "protractor";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed:boolean;
  constructor() {
    this.isCollapsed=true;
  }

  ngOnInit(): void {
    // let dataReload = document.querySelectorAll("[data-reload]");
    // let arrLang = {
    //   "ro":
    //     {
    //       servicii: "servicii",
    //       portfolio: "Portfolio",
    //       cariera: "Cariera",
    //       despreNoi: "Despre noi",
    //       contacte: "Contacte"
    //     },
    //   "en":
    //     {
    //       servicii: "Services",
    //       portfolio: "Portfolio",
    //       cariera: "Career",
    //       despreNoi: "About us",
    //       contacte: "Contacts"
    //     },
    //   "ru":
    //     {
    //       servicii: "Сервисы",
    //       portfolio: "портфолио",
    //       cariera: "карьера",
    //       despreNoi: "о нас",
    //       contacte: "контакт"
    //     }
    // };
    // if(window.location.hash){
    //   if(window.location.hash === "#en"){
    //     servicii.textContent = arrLang.en.servicii;
    //     portfolio.textContent = arrLang.en.portfolio;
    //     cariera.textContent = arrLang.en.cariera;
    //     despreNoi.textContent = arrLang.en.despreNoi;
    //     contacte.textContent = arrLang.en.contacte;
    //   }
    // }
    // for(let i=0;i<=dataReload.length;i++){
    //   //dataReload[i].onclick = function () {
    //     location.reload(true);
    //   };
    }
  }

