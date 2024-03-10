import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifecycleexamplesComponent } from './lifecycleexamples.component';

const routes: Routes = [{ path: '', component: LifecycleexamplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifecycleexamplesRoutingModule { }
