import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiveexamples',
  templateUrl: './directiveexamples.component.html',
  styleUrls: ['./directiveexamples.component.scss']
})
export class DirectiveexamplesComponent implements OnInit {

  ngClassCondition:boolean = false

  ngStyleCondition:boolean = false

  ngModalExample:string = ''


  constructor() { }

  ngOnInit(): void {
  }



}
