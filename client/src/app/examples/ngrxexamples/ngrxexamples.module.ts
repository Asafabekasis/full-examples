
import { NgModule } from '@angular/core';
import { NgrxexamplesRoutingModule } from './ngrxexamples-routing.module';
import { NgrxexamplesComponent } from './ngrxexamples.component';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [NgrxexamplesComponent,ProductsComponent],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgrxexamplesRoutingModule,
  ]
})
export class NgrxexamplesModule {}
