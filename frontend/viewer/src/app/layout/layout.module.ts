import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {CoreModule} from "../core/core.module";
import {HomeModule} from "../pages/home/home.module";



@NgModule({
  declarations: [HomeLayoutComponent, MainLayoutComponent],
  imports: [
    CommonModule,
    CoreModule,
    HomeModule
  ],
  exports: [HomeLayoutComponent]
})
export class LayoutModule { }
