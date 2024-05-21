import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsexamplesRoutingModule } from './rxjsexamples-routing.module';
import { RxjsexamplesComponent } from './rxjsexamples.component';
import { ChildoneexampleComponent } from './components/childoneexample/childoneexample.component';
import { ChildtwoexampleComponent } from './components/childtwoexample/childtwoexample.component';
import { HighlightDirective } from 'src/app/directives/highlight.directive';
import { Rxjsexamples2Component } from './rxjsexamples2/rxjsexamples2.component';


@NgModule({
  declarations: [
    RxjsexamplesComponent,
    ChildoneexampleComponent,
    ChildtwoexampleComponent,
    HighlightDirective,
    Rxjsexamples2Component,
  ],
  imports: [
    CommonModule,
    RxjsexamplesRoutingModule
  ]
})
export class RxjsexamplesModule { }
