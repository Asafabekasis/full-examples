import { NgModule } from '@angular/core';
import { NgrxexamplesRoutingModule } from './ngrxexamples-routing.module';
import { NgrxexamplesComponent } from './ngrxexamples.component';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NgrxexamplesComponent],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgrxexamplesRoutingModule,
  ],
})
export class NgrxexamplesModule {}
