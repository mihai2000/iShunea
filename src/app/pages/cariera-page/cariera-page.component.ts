import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cariera-page',
  templateUrl: './cariera-page.component.html',
  styleUrls: ['./cariera-page.component.scss']
})
export class CarieraPageComponent implements OnInit{

  afuConfig = {
    uploadAPI: {
      url:"https://slack.com/api/files.upload"
    }
  };


  constructor() { }

  ngOnInit(): void {


  }


}
