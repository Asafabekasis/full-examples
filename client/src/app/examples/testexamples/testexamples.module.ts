import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestexamplesRoutingModule } from './testexamples-routing.module';
import { TestexamplesComponent } from './testexamples.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TestexamplesComponent
  ],
  imports: [
    CommonModule,
    TestexamplesRoutingModule,
    ReactiveFormsModule
  ]
})
export class TestexamplesModule { }
