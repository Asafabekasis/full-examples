import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';
//=================================================================================================>
@Directive({
  selector: '[HostBindingStyleDirective]',
})
export class HostBindingStyleDirective {
  @HostBinding('style.backgroundColor') hostBindingBackgroundColor: string ='red';
  @HostBinding('style.color') hostBindingColor: string = 'green';
  @HostBinding('style.width') hostBindingWidth: string = '25rem';
}
//------------------------------------------------------------------------------------------------->
@Directive({
  selector: '[HostBindingClassDirective]',
})
export class HostBindingClassDirective {
  @HostBinding('class.host-binding-class') hostBindingClass = true;
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.hostBindingClass = false;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.hostBindingClass = true;
  }
}
//------------------------------------------------------------------------------------------------->
@Directive({
  selector: '[HostBindingDomDirective]',
})
export class HostBindingDomDirective {
  @HostBinding('innerHTML') hostBindingInnerHtml: string ='host binding innerHTML';
  @HostBinding('value') hostBindingValue: string ='host binding value in input';
}

//////////////////////////////////////////////////////////////////////////////////////////////////=>

