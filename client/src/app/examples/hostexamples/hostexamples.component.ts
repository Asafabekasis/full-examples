import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-hostexamples',
  templateUrl: './hostexamples.component.html',
  styleUrls: ['./hostexamples.component.scss'],
})
export class HostexamplesComponent implements OnInit {
  constructor() {}

  public HostListenerCount: number = 0;

  ngOnInit(): void {}

  //=================================================================================================>

  @HostListener('document:click', ['$event'])
  DocumentClick(event: Event) {
    console.log('clicked');
    this.HostListenerCount += 1;
  }

  //------------------------------------------------------------------------------------------------->

  //////////////////////////////////////////////////////////////////////////////////////////////////=>


}
