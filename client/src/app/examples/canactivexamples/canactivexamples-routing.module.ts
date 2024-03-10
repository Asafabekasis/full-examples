import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivexamplesComponent } from './canactivexamples.component';
import ComponentOne from './component-one';
import ComponentTwo from './component-two';
import ActivateGuard from './activate-guard';
import DeactivateGuard from './deactivate-guard';

const routes: Routes = [
  { path: '', component: CanactivexamplesComponent },
  { path: 'component-one', component: ComponentOne,canActivate:[ActivateGuard] },
  {
    path: 'component-two',
    component: ComponentTwo,
    canActivate: [ActivateGuard],
    canDeactivate: [DeactivateGuard], 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanactivexamplesRoutingModule {}
