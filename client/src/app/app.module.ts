import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { HostexamplesComponent } from './examples/hostexamples/hostexamples.component';
import {
  HostBindingStyleDirective,
  HostBindingClassDirective,
  HostBindingDomDirective,
} from './directives/host.directive';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormexamplesComponent } from './examples/formexamples/formexamples.component';
import { ViewchildexamplesComponent } from './examples/viewchildexamples/viewchildexamples.component';
import { PipeexamplesComponent } from './examples/pipeexamples/pipeexamples.component';
import { MultiplierPipe } from './pipes/pipes.pipe';
import { ApiexamplesComponent } from './examples/apiexamples/apiexamples.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { TemplateexamplesComponent } from './examples/templateexamples/components/templateexamples/templateexamples.component';
import { DirectiveexamplesComponent } from './examples/directiveexamples/directiveexamples/directiveexamples.component';

@NgModule({
  declarations: [
    AppComponent,
    HostexamplesComponent,
    HostBindingStyleDirective,
    HostBindingClassDirective,
    HostBindingDomDirective,
    FormexamplesComponent,
    ViewchildexamplesComponent,
    PipeexamplesComponent,
    ApiexamplesComponent,
    MenuComponent,
    TemplateexamplesComponent,
    DirectiveexamplesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MultiplierPipe,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
