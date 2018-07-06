import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { slideInOutAnimation, fadeInAnimation } from '../../assets/_animations/index';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css'],
//   animations: [slideInOutAnimation, fadeInAnimation, trigger('slideInOut', [
//     state('in', style({
//         transform: 'translate3d(0, 0, 0)'
//     })),
//     state('out', style({
//         transform: 'translate3d(100%, 0, 0)'
//     })),
//     transition('in => out', animate('400ms ease-in-out')),
//     transition('out => in', animate('400ms ease-in-out'))
// ]),
// ],
// host: {
//     '(window:scroll)': 'updateHeader($event)',
//     '[@slideInOutAnimation]': '',
//     '[@fadeInAnimation]': ''
// }
})
export class ContactComponentComponent implements OnInit {
      title = 'app';
      isScrolled = false;
      currPos: Number = 0;
      startPos: Number = 0;
      changePos: Number = 0;
  
      menuState = 'out';
  
      constructor() { }
      ngOnInit(){
      }
  
      updateHeader(evt) {
          this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
          if (this.currPos >= this.changePos) {
              this.isScrolled = true;
          } else {
              this.isScrolled = false;
          }
      }
  

}
