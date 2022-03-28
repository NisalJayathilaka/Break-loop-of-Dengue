import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',

  template: `
  <div>
  <h1>{{title}}</h1>
  <pm-dengueCases></pm-dengueCases>
  </div>
  `
})
export class AppComponent {
  title = 'breakDengeL';
}
