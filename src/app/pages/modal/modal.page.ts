import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor( private modalCrl: ModalController ) { }

  ngOnInit() {
  }

  async abrirModal() {
    const modal  = await this.modalCrl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Ernesto',
        pais: 'México'
      }
    });

    await  modal.present();

    const {data} = await modal.onDidDismiss();
    console.log('Retorno de modal', data);
     
  }

}
