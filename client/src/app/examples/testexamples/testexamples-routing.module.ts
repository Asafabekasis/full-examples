import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestexamplesComponent } from './testexamples.component';

const routes: Routes = [{ path: '', component: TestexamplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestexamplesRoutingModule { }
