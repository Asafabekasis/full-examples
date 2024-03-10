import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanactivexamplesRoutingModule } from './canactivexamples-routing.module';
import { CanactivexamplesComponent } from './canactivexamples.component';
import ComponentOne from './component-one';
import ComponentTwo from './component-two';
import ActivateGuard from './activate-guard';
import DeactivateGuard from './deactivate-guard';

@NgModule({
  declarations: [CanactivexamplesComponent, ComponentOne, ComponentTwo],
  providers: [ActivateGuard, DeactivateGuard],
  bootstrap: [CanactivexamplesComponent],
  imports: [CommonModule, CanactivexamplesRoutingModule],
})
export class CanactivexamplesModule {}
