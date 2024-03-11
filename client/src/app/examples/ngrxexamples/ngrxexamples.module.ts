import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxexamplesRoutingModule } from './ngrxexamples-routing.module';
import { NgrxexamplesComponent } from './ngrxexamples.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NgrxexamplesComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgrxexamplesRoutingModule,
  ],
})
export class NgrxexamplesModule {}
