import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponentComponent } from './my-component/my-component.component.js';
import { SidebarComponent  } from './sidebar/sidebar.component.js';
import { LoginComponentComponent } from './login-component/login-component.component.js';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyComponentComponent,
    SidebarComponent,
    LoginComponentComponent

  ]
})
export class AppModuleModule { }
