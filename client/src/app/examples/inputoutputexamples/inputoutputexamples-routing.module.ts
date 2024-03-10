import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputoutputexamplesComponent } from './inputoutputexamples.component';

const routes: Routes = [{ path: '', component: InputoutputexamplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputoutputexamplesRoutingModule { }
