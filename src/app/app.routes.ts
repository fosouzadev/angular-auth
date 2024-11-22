import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { ErrorComponent } from './views/error/error.component';

export const routes: Routes = [
    { path: 'home/:userName', component: HomeComponent, title: 'home' },
    { path: 'error', component: ErrorComponent, title: 'error'},
    { path: '', component: LoginComponent, title: 'login' },
    { path: '**', component: ErrorComponent, title: 'not found' }
];