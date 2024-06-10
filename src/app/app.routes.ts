import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
{path : '',component:LoginComponentComponent},
{path: 'home', component:MyComponentComponent}
];



