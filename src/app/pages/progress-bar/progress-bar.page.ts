import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {
  porcentaje = 0.05;

  constructor() { }

  ngOnInit() {
  }

  cambioRango(e) {
    console.log(e);
    this.porcentaje = e.detail.value/100;
  }

}
