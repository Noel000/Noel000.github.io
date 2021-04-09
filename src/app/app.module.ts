import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LlistaComponent } from './pages/llista/llista.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CrearComponent } from './pages/crear/crear.component';
import { DetallsComponent } from './pages/detalls/detalls.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LlistaPublicComponent } from './pages/llista-public/llista-public.component';

@NgModule({
  declarations: [
    AppComponent,
    LlistaComponent,
    HeaderComponent,
    HomeComponent,
    CrearComponent,
    DetallsComponent,
    CurriculumComponent,
    LogoutComponent,
    LoginComponent,
    FooterComponent,
    LlistaPublicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment. firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
