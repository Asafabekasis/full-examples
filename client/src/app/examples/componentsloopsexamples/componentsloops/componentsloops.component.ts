import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentsloops',
  templateUrl: './componentsloops.component.html',
  styleUrls: ['./componentsloops.component.scss'],
})
export class ComponentsloopsComponent implements OnInit {
  constructor() {}

  check = '11111'
 
  public array1 = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
  ];

  ngOnInit(): void {}

  change(e){
    console.log(e);
    this.array1[this.array1.findIndex(ob=>ob.id === e[0])].id = e[1]
    console.log('this.array1',this.array1);
    
  }

}
