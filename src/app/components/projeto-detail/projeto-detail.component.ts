import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-projeto-detail',
  templateUrl: './projeto-detail.component.html',
  styleUrls: ['./projeto-detail.component.scss'],
  standalone: false
})
export class ProjetoDetailComponent implements OnInit {

  @Input() projeto: any;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  fecharModal() {
    this.modalController.dismiss();
  }

}