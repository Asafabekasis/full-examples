import { Directive,HostBinding } from '@angular/core';
import { Subscription, delay } from 'rxjs';
import { GeneralService } from '../services/general.service';
@Directive({
  selector: '[HighlightDirective]',
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;

  public sub: Subscription;

  constructor(
    public _general: GeneralService
  ) {
    this.sub = this._general
      .triggerhighlightSubject()
      .pipe(delay(10))
      .subscribe((res) => {
        this.color = res;
        this.backgroundColor = 'pink';
      });
  }
}
