import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteexamplesComponent } from './routeexamples.component';
import { ChildexampleComponent } from './components/childexample/childexample.component';

const routes: Routes = [
  { path: '', component: RouteexamplesComponent },
  { path: 'child/:id', component: ChildexampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteexamplesRoutingModule {}
