import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-acasa-detalii',
  templateUrl: './acasa-detalii.component.html',
  styleUrls: ['./acasa-detalii.component.scss']
})
export class AcasaDetaliiComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  openVerticallyCentered({content}: { content: any }) {
    this.modalService.open(content, { centered: true, size: "xl"});
  }

  ngOnInit(): void {
  }

}
