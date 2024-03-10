import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  public subjectOneExample = new Subject();
  public subjectTwoExample = new Subject();
  public behaviorSubjectExample = new BehaviorSubject('BehaviorSubject Default Value Default Next When Subscribe');


  constructor() {}

  public triggersubjectOneExample() {
    // return this.subjectOneExample.asObservable();
    return this.subjectOneExample as Observable<any>;
  }

  public triggersubjectTwoExample() {
    return this.subjectTwoExample.asObservable();
    // return this.subjectTwoExample as Observable<any>;
  }
}
