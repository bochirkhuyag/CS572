import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<p isVisible [hidden]="true">this is Paragraph with custom directive Isvisible equals to true </p>
          <p makeBigger>Double click to increase font </p> 
          <smart></smart>
  `,
  styles: ['']
})
export class AppComponent {
  title = 'HW13';
}
