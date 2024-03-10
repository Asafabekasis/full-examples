import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {
    console.log('MenuComponent=>this.router:::', this.router);
  }
}
