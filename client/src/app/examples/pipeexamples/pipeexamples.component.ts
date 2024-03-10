import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeexamples',
  templateUrl: './pipeexamples.component.html',
  styleUrls: ['./pipeexamples.component.scss']
})
export class PipeexamplesComponent implements OnInit {

  constructor() { }

  public numbers:Array<number> = [1,2,3,4,5,6,7,8,9,10]

  ngOnInit(): void {
  }

}
