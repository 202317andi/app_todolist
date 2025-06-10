import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/inicio', icon: 'home' },
    { title: 'Sobre mim', url: '/sobre-mim', icon: 'person' },
    { title: 'Habilidades', url: '/habilidades', icon: 'school' },
    { title: 'Contato', url: '/contato', icon: 'mail' },
    { title: 'Projetos', url: '/projetos', icon: 'folder' }
  ];

  constructor() {}
}