
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component.js';
import { SidebarComponent  } from './sidebar/sidebar.component.js'
import { LoginComponentComponent } from './login-component/login-component.component.js';


@Component({
  selector: 'app-root',
  
  standalone: true,
  imports: [
    RouterOutlet,
    MyComponentComponent,
    SidebarComponent,
    LoginComponentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
}
