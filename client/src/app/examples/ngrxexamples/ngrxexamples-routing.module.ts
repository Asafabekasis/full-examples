import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxexamplesComponent } from './ngrxexamples.component';

const routes: Routes = [{ path: '', component: NgrxexamplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgrxexamplesRoutingModule { }
