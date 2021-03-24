import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input()  nombre;
  @Input() pais;

  constructor( private modalCtr: ModalController ) { }

  ngOnInit() {
  }

  salrSinArg() {
    this.modalCtr.dismiss();
  }

  salirConArg() {
    this.modalCtr.dismiss({
      nombre: 'Fernando',
      pais: 'Costa Rica'
    });
  }

}
