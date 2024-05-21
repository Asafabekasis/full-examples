import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-innercomponent',
  templateUrl: './innercomponent.component.html',
  styleUrls: ['./innercomponent.component.scss']
})
export class InnercomponentComponent implements OnInit {

  @Input() item: any 
  @Output() newItemEvent = new EventEmitter<any>();

  example
  constructor() { }

  ngOnInit(): void {
    this.example = new FormControl(this.item);

  }

  change(){

    console.log(this.example.value);
    
    this.newItemEvent.emit([this.item,this.example.value])
  }

}
