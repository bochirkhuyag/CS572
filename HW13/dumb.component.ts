import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dumb',
  template: `
    <p>
      dumb component for presentation 
    </p>
  `,
  styles: []
})
export class DumbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
