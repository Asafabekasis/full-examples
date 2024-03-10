import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-childtwoexample',
  templateUrl: './childtwoexample.component.html',
  styleUrls: ['./childtwoexample.component.scss'],
})
export class ChildtwoexampleComponent implements OnInit {
  public sub: Subscription;
  public subjectResults

  constructor(public _subjectService: SubjectService) {
    this.sub = this._subjectService
      .triggersubjectTwoExample()
      .subscribe((res) => {
        console.log(res);
        this.subjectResults = res
      });
  }

  ngOnInit(): void {}

  sendVal(val){
    this._subjectService.subjectOneExample.next(val)
  }
}
