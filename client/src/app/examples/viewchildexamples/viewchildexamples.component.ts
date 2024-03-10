import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchildexamples',
  templateUrl: './viewchildexamples.component.html',
  styleUrls: ['./viewchildexamples.component.scss'],
})
export class ViewchildexamplesComponent implements OnInit {
  @ViewChild('maincontent') mainContent: any;
  @ViewChild('subcontent') subContent: any;

  constructor() {}

  ngOnInit(): void {}

  public changeMainContent() {
    console.log('changeMainContent');
    this.mainContent.nativeElement.setAttribute('style', 'color:red');
  }

  public changeSubContent() {
    console.log('changeSubContent');
    this.subContent.nativeElement.setAttribute('style', 'color:green');
  }
}
