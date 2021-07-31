import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-servicii-page',
  templateUrl: './servicii-page.component.html',
  styleUrls: ['./servicii-page.component.scss']
})
export class ServiciiPageComponent implements  OnInit{

  constructor(private modalService: NgbModal) { }


  openVerticallyCentered({content}: { content: any }) {
    this.modalService.open(content, { centered: true, size: 'xl'});
  }

  ngOnInit(): void {
  }

}
