import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifecycleexamplesRoutingModule } from './lifecycleexamples-routing.module';
import { LifecycleexamplesComponent } from './lifecycleexamples.component';
import { ChildexamplesComponent } from './components/lifecycleexamples/childexamples.component';


@NgModule({
  declarations: [
    LifecycleexamplesComponent,
    ChildexamplesComponent
  ],
  imports: [
    CommonModule,
    LifecycleexamplesRoutingModule
  ]
})
export class LifecycleexamplesModule { }
