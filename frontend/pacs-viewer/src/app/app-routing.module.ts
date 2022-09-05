import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLayoutComponent} from "./pages/_layout/app-layout/app-layout.component";
import {HomeComponent} from "./pages/home/home.component";
import {ViewerComponent} from "./pages/viewer/viewer.component";
import {ViewerLayoutComponent} from "./pages/_layout/viewer-layout/viewer-layout.component";
import {LoginComponent} from "./pages/login/login.component";
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  // app router ues base app-layout
  {
    path: '',
    component: AppLayoutComponent,
    canActivate:[AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
    ]
  },
  {
    path: '',
    component: ViewerLayoutComponent,
    children: [
      { path: 'viewer/:id', component: ViewerComponent },
    ]
  },
  // img-layout
  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
