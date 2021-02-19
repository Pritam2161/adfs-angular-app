import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App';
  tabs = [
    {
      id: 'home',
      name: 'HOME',
      routerLink: 'home',
    },
    {
      id: 'consent',
      name: 'CONSENT',
      routerLink: 'consent',
    },
  ];
}
