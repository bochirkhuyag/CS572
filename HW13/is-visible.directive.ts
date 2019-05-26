import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective {

  @Input('hidden') 
  hidden:boolean=true;
  constructor(public e:ElementRef,private renderer:Renderer2) {  
    
  }

  ngOnInit() {
    if(this.hidden){
      this.renderer.setStyle(this.e.nativeElement,'visibility','visible');
  } 
  else{
    this.renderer.setStyle(this.e.nativeElement,'visibility','hidden');
  }
  }

}
