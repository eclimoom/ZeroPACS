import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudyListComponent } from './components/study-list/study-list.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [StudyListComponent, HomeComponent],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
