import { Component, OnInit } from '@angular/core';
import {$} from "protractor";

@Component({
  selector: 'app-parteneri',
  templateUrl: './parteneri.component.html',
  styleUrls: ['./parteneri.component.scss']
})
export class ParteneriComponent implements OnInit {


  // $(document).ready(function(){
  //   $('.parteneri').slick({
  //     slidesToShow: 6,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 1500,
  //     arrows: false,
  //     dots: false,
  //     pauseOnHover: false,
  //     responsive: [{
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 4
  //       }
  //     }, {
  //       breakpoint: 520,
  //       settings: {
  //         slidesToShow: 3
  //       }
  //     }]
  //   });
  // });
  constructor() { }

  ngOnInit(): void {

  }

}
