import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-childexample',
  templateUrl: './childexample.component.html',
  styleUrls: ['./childexample.component.scss']
})
export class ChildexampleComponent implements OnInit {

  constructor(public router:Router,public activateRoute:ActivatedRoute) { }

  public routeId

  ngOnInit(): void {
    console.log(this.activateRoute);
    this.routeId = this.activateRoute.snapshot.params['id']
  }

}
