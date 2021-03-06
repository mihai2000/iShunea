import { Component } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-cum-lucram-noi',
  templateUrl: './cum-lucram-noi.component.html',
  styleUrls: ['./cum-lucram-noi.component.scss']
})
export class CumLucramNoiComponent  {

  constructor(private modalService: NgbModal) {}

  openVerticallyCentered({content}: { content: any }) {
    this.modalService.open(content, { centered: true, size: "lg"});
  }

  ngOnInit(): void {
  }

}
