import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Pokemon</h1>
  <p>(Name or Id)</p>
  <app-card></app-card>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularServices';
}
