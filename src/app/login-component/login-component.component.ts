
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
  // animations: [
  //   trigger('div2State', [
  //     state('hidden', style({
  //       opacity: 0,
  //     })),
  //     state('visible', style({
  //       opacity: 1,
  //     })),
  //     transition('hidden <=> visible', [
  //       animate('4.5s ease-in-out') // Updated to 0.5s for typical transition time
  //     ])
  //   ])
  // ]
})
export class LoginComponentComponent implements OnInit, OnDestroy {
  isloading: number = 0;
  percentagecount: number = 0;
  percentagecountstop: any;

  ngOnInit(): void {
    this.percentagecountstop = setInterval(() => {
      this.percentagecount++;
      if (this.percentagecount > 100) {
        clearInterval(this.percentagecountstop);
        this.isloading++;
        console.log(this.isloading);
      }
    }, 60);
  }

  ngOnDestroy(): void {
    if (this.percentagecountstop) {
      clearInterval(this.percentagecountstop);
    }
  }

  isDiv2Visible = false;
  ismainVisible = false;
  startani = false;
  toggleDiv(): void {
    this.startani = !this.startani;
    setTimeout(() => {
      this.isDiv2Visible = !this.isDiv2Visible;
    }, 200);
    
    setTimeout(() => {
      this.ismainVisible = !this.ismainVisible;
    }, 2000);
  }
}

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router } from 'express';
// import { RouterModule } from '@angular/router';
// import { trigger, state, style, transition, animate } from '@angular/animations';
// @Component({
//   selector: 'app-login-component',
//   standalone: true,
//   imports: [
//     CommonModule,
//     RouterModule
//   ],
//   templateUrl: './login-component.component.html',
//   styleUrl: './login-component.component.css',
//   animations: [
//     trigger('div2State', [
//       state('hidden', style({
//         opacity: 0,
//         transform: 'translateY(-100%)'
//       })),
//       state('visible', style({
//         opacity: 1,
//         transform: 'translateY(0)'
//       })),
//       transition('hidden <=> visible', [
//         animate('4.5s ease-in-out')
//       ])
//     ])
//   ]
// })
// export class LoginComponentComponent {
//   isloading: number = 0;
//   percentagecount: number = 0;
//   percentagecountstop: any = setInterval(() => {
//     this.percentagecount++;
//     if (this.percentagecount > 100) {
//       clearInterval(this.percentagecountstop);
//       this.isloading++;
//       console.log(this.isloading);
//     }
//   },60)
//   isDiv2Visible = false;

//   toggleDiv(): void {
//     this.isDiv2Visible = !this.isDiv2Visible;
//   }
// }




