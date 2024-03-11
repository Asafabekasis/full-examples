import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
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
import { MenuComponent } from './mainmenu/mainmenu.component';
import { TemplateexamplesComponent } from './examples/templateexamples/components/templateexamples/templateexamples.component';
import { DirectiveexamplesComponent } from './examples/directiveexamples/directiveexamples/directiveexamples.component';
import { MainComponent } from './components/main/main.component';
import { EncryptdecryptComponent } from './examples/encryptdecrypt/encryptdecrypt.component';
import { StoreModule } from '@ngrx/store';
import { counter2Reducer, counterReducer, customersReducer, generalReducer, productsReducer } from './examples/ngrxexamples/main.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MainEffects } from './examples/ngrxexamples/main.effect';

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
    MainComponent,
    EncryptdecryptComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MultiplierPipe,
    HttpClientModule,
    StoreModule.forRoot({
      products: productsReducer,
      customers: customersReducer, 
      mainheader:generalReducer,
      count: counterReducer,
      count2: counter2Reducer 
    }),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    EffectsModule.forRoot([MainEffects]),
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
