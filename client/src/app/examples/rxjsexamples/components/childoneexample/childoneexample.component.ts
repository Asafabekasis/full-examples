import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-childoneexample',
  templateUrl: './childoneexample.component.html',
  styleUrls: ['./childoneexample.component.scss'],
})
export class ChildoneexampleComponent implements OnInit {
  public sub: Subscription;
  public subjectResults

  constructor(public _subjectService: SubjectService) {
    this.sub = this._subjectService
      .triggersubjectOneExample()
      .subscribe((res) => {
        console.log(res);
        this.subjectResults = res
      });
  }

  ngOnInit(): void {}

  sendVal(val){
    this._subjectService.subjectTwoExample.next(val)
  }
}
