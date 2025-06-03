import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { FormNewTaskComponent } from '../components/form-new-task/form-new-task.component';
import { TaskDetailComponent } from '../components/task-detail/task-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage, 
    FormNewTaskComponent, 
    TaskDetailComponent
  ]
})
export class HomePageModule {}