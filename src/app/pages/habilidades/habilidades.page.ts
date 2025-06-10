import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.page.html',
  styleUrls: ['./habilidades.page.scss'],
  standalone: false,
})
export class HabilidadesPage implements OnInit {

  skills = [
    { name: 'HTML', level: 50 },
    { name: 'CSS', level: 50},
    { name: 'JavaScript', level: 15 },
    { name: 'Angular', level: 15},
    { name: 'Ionic', level: 20 },
    { name: 'TypeScript', level: 10},
    { name: 'Git/GitHub', level: 59},
    { name: 'Mobile Development', level: 10}
  ];

  constructor() { }

  ngOnInit() {
  }

  getProgressColor(level: number): string {
    if (level >= 80) return 'success';
    if (level >= 60) return 'warning';
    return 'danger';
  }

}