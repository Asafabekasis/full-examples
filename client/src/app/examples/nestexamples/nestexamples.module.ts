import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NestexamplesRoutingModule } from './nestexamples-routing.module';
import { NestexamplesComponent } from './nestexamples.component';


@NgModule({
  declarations: [
    NestexamplesComponent
  ],
  imports: [
    CommonModule,
    NestexamplesRoutingModule
  ]
})
export class NestexamplesModule { }
