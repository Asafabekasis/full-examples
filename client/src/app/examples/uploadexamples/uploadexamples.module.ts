import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadexamplesRoutingModule } from './uploadexamples-routing.module';
import { UploadexamplesComponent } from './uploadexamples.component';


@NgModule({
  declarations: [
    UploadexamplesComponent
  ],
  imports: [
    CommonModule,
    UploadexamplesRoutingModule
  ]
})
export class UploadexamplesModule { }
