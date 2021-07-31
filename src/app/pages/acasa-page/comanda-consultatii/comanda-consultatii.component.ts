import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-comanda-consultatii',
  templateUrl: './comanda-consultatii.component.html',
  styleUrls: ['./comanda-consultatii.component.scss']
})
export class ComandaConsultatiiComponent implements OnInit {

  constructor(private modalService: NgbModal) { }


  openVerticallyCentered({content}: { content: any }) {
    this.modalService.open(content, { centered: true, size: 'xl'});
  }


  ngOnInit(): void {
  }

}
