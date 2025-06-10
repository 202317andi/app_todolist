import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
  standalone: false,
})
export class ContatoPage implements OnInit {

  contact = {
    nome: '',
    email: '',
    mensagem: ''
  };

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async enviarMensagem() {
    // Limpar os campos
    this.contact = {
      nome: '',
      email: '',
      mensagem: ''
    };

    // Mostrar toast de sucesso
    const toast = await this.toastController.create({
      message: 'Mensagem enviada com sucesso!',
      duration: 3000,
      position: 'bottom',
      color: 'success',
      icon: 'checkmark-circle-outline'
    });
    
    await toast.present();
  }

}