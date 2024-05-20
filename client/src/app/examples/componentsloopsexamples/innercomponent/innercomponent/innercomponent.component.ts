import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-innercomponent',
  templateUrl: './innercomponent.component.html',
  styleUrls: ['./innercomponent.component.scss']
})
export class InnercomponentComponent implements OnInit {

  @Input() item: any 
  @Output() newItemEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  change(param){
    this.newItemEvent.emit([this.item,param])
  }

}
