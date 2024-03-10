import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputoutputexamplesRoutingModule } from './inputoutputexamples-routing.module';
import { InputoutputexamplesComponent } from './inputoutputexamples.component';
import { ChildexampleComponent } from './components/childexample/childexample.component';


@NgModule({
  declarations: [
    InputoutputexamplesComponent,
    ChildexampleComponent
  ],
  imports: [
    CommonModule,
    InputoutputexamplesRoutingModule
  ]
})
export class InputoutputexamplesModule { }
