import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  public highlightSubject = new Subject<string>();
  public subjectExample = new Subject();
  constructor() {}

  // public triggerSubjectExampleGeneral() {
  //   // return this.subjectExample.asObservable();
  //   return this.subjectExample as Observable<any>;
  // }

  public triggerhighlightSubject() {
    return this.highlightSubject.asObservable();
    // return this.highlightSubject as Observable<any>;
  }
}
