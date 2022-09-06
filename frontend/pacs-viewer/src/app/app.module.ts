import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthService } from './core/services/auth.service';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AppLayoutComponent } from './pages/_layout/app-layout/app-layout.component';
import { AppHeaderComponent } from './pages/_layout/app-header/app-header.component';
import { ViewerComponent } from './pages/viewer/viewer.component';
import { ViewerLayoutComponent } from './pages/_layout/viewer-layout/viewer-layout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
// reducers
import { appReducer } from './core/store/app.reducer';
import { authReducer } from './core/store/reducers/auth.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AppLayoutComponent,
    ViewerLayoutComponent,
    AppHeaderComponent,
    AppHeaderComponent,
    ViewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ appState: appReducer, user: authReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
