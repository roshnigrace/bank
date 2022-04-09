import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(private el:ElementRef) {
    console.log(el);
    el.nativeElement.style.backgroundColor="black"
    
   }

}
