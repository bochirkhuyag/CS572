import { Component, OnInit, Input } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'counter',
  template: `
    <p>
<button (click)="increment()">+</button>
{{counter}}
<button (click)="decrement()">-</button>
    </p>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

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
