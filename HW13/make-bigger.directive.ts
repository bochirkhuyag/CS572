import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[makeBigger]'
})
export class MakeBiggerDirective {

  @HostListener('dblclick') 
  changeFont() {
    let style = getComputedStyle(this.element.nativeElement);
    let font = style.fontSize.slice(0,style.fontSize.length-2);
    this.fontSize = +font+2;
    //console.log(font);
    this.renderer.setStyle(this.element.nativeElement,'font-size',this.fontSize+'px');
  }
  fontSize:number;
  constructor(private element:ElementRef,private renderer:Renderer2) {
   }
   ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement,'font-size',this.fontSize+'px');
   }

}
