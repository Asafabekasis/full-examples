import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routeexamples',
  templateUrl: './routeexamples.component.html',
  styleUrls: ['./routeexamples.component.scss'],
})
export class RouteexamplesComponent implements OnInit {
  public examples: Array<any> = [
    { name: 'example1', id: 1 },
    { name: 'example2', id: 2 },
    { name: 'example3', id: 3 },
    { name: 'example4', id: 4 },
    { name: 'example5', id: 5 },
    { name: 'example6', id: 6 },
    { name: 'example7', id: 7 },
    { name: 'example8', id: 8 },
    { name: 'example9', id: 9 },
    { name: 'example10', id: 10 },
  ];

  constructor(public router: Router, public activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
  }

  nav(id){
    this.router.navigate([`route/child/${id}`])
  }
}
