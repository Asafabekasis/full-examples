import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteexamplesRoutingModule } from './routeexamples-routing.module';
import { RouteexamplesComponent } from './routeexamples.component';
import { ChildexampleComponent } from './components/childexample/childexample.component';


@NgModule({
  declarations: [
    RouteexamplesComponent,
    ChildexampleComponent
  ],
  imports: [
    CommonModule,
    RouteexamplesRoutingModule
  ]
})
export class RouteexamplesModule { }
