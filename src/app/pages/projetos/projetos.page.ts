import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProjetoDetailComponent } from '../../components/projeto-detail/projeto-detail.component';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.page.html',
  styleUrls: ['./projetos.page.scss'],
  standalone: false,
})
export class ProjetosPage implements OnInit {

  projetos = [
    {
      id: 1,
      titulo: 'Portfolio ADS UPF',
      descricaoBreve: 'Porfolio HTML, JS e CSS',
      descricaoCompleta: 'Aplicação web progressiva desenvolvida para demonstrar conhecimentos em HTML, CSS e JavaScript. ',
      imagem: 'assets/projeto1.jpg',
      link: 'https://github.com/andersonmelara/pwa-ads-upf',
      tecnologias: ['HTML', 'CSS', 'JavaScript', ]
    },
    {
      id: 2,
      titulo: 'TODO List',
      descricaoBreve: 'App de tarefas usando Ionic',
      descricaoCompleta: 'Aplicativo de lista de tarefas desenvolvido com Ionic e Angular. Permite adicionar, editar, excluir e visualizar detalhes das tarefas. Inclui persistência local e interface responsiva.',
      imagem: 'assets/projeto1.jpg',
      link: 'https://github.com/andersonmelara/todo-ionic',
      tecnologias: ['Ionic', 'Angular', 'TypeScript', 'CSS']
    },
    {
      id: 3,
      titulo: 'Personal APP',
      descricaoBreve: 'App de apresentação pessoal com Ionic',
      descricaoCompleta: 'Aplicativo pessoal desenvolvido com Ionic para apresentar informações pessoais, habilidades, projetos e contato. Inclui navegação por menu lateral, formulários e modais.',
      imagem: 'assets/projeto1.jpg',
      link: 'https://github.com/andersonmelara/personal-app',
      tecnologias: ['Ionic', 'Angular', 'TypeScript', 'SCSS']
    }
  ];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async abrirDetalhes(projeto: any) {
    const modal = await this.modalController.create({
      component: ProjetoDetailComponent,
      componentProps: {
        projeto: projeto
      }
    });
    await modal.present();
  }

}