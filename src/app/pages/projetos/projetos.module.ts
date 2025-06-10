import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProjetosPageRoutingModule } from './projetos-routing.module';
import { ProjetosPage } from './projetos.page';
import { ProjetoDetailComponent } from '../../components/projeto-detail/projeto-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjetosPageRoutingModule
  ],
  declarations: [
    ProjetosPage,
    ProjetoDetailComponent
  ]
})
export class ProjetosPageModule {}