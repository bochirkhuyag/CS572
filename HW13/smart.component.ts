import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart',
  template: `
    <p>
      smart component with its own data : {{data}}
    </p>
    <dumb><dumb>
  `,
  styles: []
})
export class SmartComponent implements OnInit {

  data = "this is data";

  constructor() { }
   
  ngOnInit() {
  }

}
