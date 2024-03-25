import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NestexamplesComponent } from './nestexamples.component';

const routes: Routes = [{ path: '', component: NestexamplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NestexamplesRoutingModule { }
