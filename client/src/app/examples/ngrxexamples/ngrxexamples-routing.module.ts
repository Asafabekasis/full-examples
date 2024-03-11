import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxexamplesComponent } from './ngrxexamples.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: '', component: NgrxexamplesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgrxexamplesRoutingModule { }
