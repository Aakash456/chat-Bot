import { Directive, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appMessagecolor]'
})
export class MessagecolorDirective {

  constructor() {element: ElementRef }
  
  //element.nativeElement.style.backgroundColor = 'yellow ';
}
