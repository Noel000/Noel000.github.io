import { NgModule } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Routes, RouterModule } from '@angular/router';
import { CrearComponent } from './pages/crear/crear.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { DetallsComponent } from './pages/detalls/detalls.component';
import { HomeComponent } from './pages/home/home.component';
import { LlistaComponent } from './pages/llista/llista.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { LlistaPublicComponent } from './pages/llista-public/llista-public.component';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectLoggedInToHome = () => redirectLoggedInTo(['/home']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {path: '',  redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'llista', canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}, children: [ 
    {path: '', component: LlistaComponent},
    {path: ':i', component: DetallsComponent}]},
  {path: 'crear', component: CrearComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  {path: 'login', component: LoginComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToHome }},
  {path: 'logout', component: LogoutComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  {path: 'curriculum', component: CurriculumComponent, },
  {path: 'login', component: LoginComponent},
  {path: 'llista-public',  children: [ 
    {path: '', component: LlistaPublicComponent},
    {path: ':i', component: DetallsComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
