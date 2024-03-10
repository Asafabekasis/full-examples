import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputoutputexamples',
  templateUrl: './inputoutputexamples.component.html',
  styleUrls: ['./inputoutputexamples.component.scss'],
})
export class InputoutputexamplesComponent implements OnInit {
  title = 'client';
  currentItem = 'Television';

  constructor() {}

  ngOnInit(): void {}

  items = [];

  addItem(newItem: string) {
    this.items.push(newItem);
    console.log(this.items);
  }

  removeItem(id) {
    this.items = this.items.filter((ob) => ob.id !== JSON.parse(id));
  }
}
