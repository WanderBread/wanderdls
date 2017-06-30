import { Component } from '@angular/core';



@Component({
  selector: 'about',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AboutComponent  { name = 'this changes now'; }
