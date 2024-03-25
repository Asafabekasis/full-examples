import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadexamplesComponent } from './uploadexamples.component';

const routes: Routes = [{ path: '', component: UploadexamplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadexamplesRoutingModule { }
