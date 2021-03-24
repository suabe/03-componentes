import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: any;

  constructor( private loadingCtrl: LoadingController ) { }

  ngOnInit() {
    this.presentLoading('Espere...');
    setTimeout(() => {
      this.loading.dismiss();
      console.log('Loading dismissed!');
    }, 1500);

  }

  async presentLoading( message: string ) {
    this.loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message
    });
    this.loading.present();
    
  }


}
