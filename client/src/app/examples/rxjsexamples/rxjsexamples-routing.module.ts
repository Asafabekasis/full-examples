import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsexamplesComponent } from './rxjsexamples.component';

const routes: Routes = [{ path: '', component: RxjsexamplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsexamplesRoutingModule { }
