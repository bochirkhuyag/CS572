import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'counter2',
  template: `
  <p>
  <button (click)="increment()">+</button>
  {{counter}}
  <button (click)="decrement()">-</button>
      </p>
   
  `,
  styles: []
})
export class Counter2Component implements OnInit {

  @Input('count') counter:number=0;

  constructor() { }

  ngOnInit() {
  }
  increment():void{
    this.counter++;
  }
  decrement():void{
    this.counter--;
  }

}
