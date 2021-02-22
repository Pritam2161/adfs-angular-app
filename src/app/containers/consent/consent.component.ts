import { Component } from '@angular/core';

@Component({
  selector: 'app-consent',
  template: `<iframe class="style" src="http://localhost:4205/"></iframe>`,
  styles: [`
    .style {
      overflow: hidden;
      overflow-x: hidden;
      overflow-y: hidden;
      height: calc(100% - 20px);
      width: calc(100% - 20px);
      margin-top: 2px;
    }
  `]
})
export class ConsentComponent {
  constructor() { }
}