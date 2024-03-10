import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childexample',
  templateUrl: './childexample.component.html',
  styleUrls: ['./childexample.component.scss'],
})
export class ChildexampleComponent implements OnInit {
  @Input() item: string = '';
  @Output() newItemEvent = new EventEmitter<any>();
  @Output() removeItemEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  addNewItem(item: any) {
    if (typeof item === 'object') {
      this.newItemEvent.emit(item);
    } else {
      this.newItemEvent.emit({
        id: Math.round(Math.random() * (1000 - 1 + 1)),
        productName: item,
      });
    }
  }

  removeItemTrigger(id) {
    console.log(id);

    this.removeItemEvent.emit(id);
  }
}
