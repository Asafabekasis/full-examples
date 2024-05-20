import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiexamplesComponent } from './examples/apiexamples/apiexamples.component';
import { FormexamplesComponent } from './examples/formexamples/formexamples.component';
import { ViewchildexamplesComponent } from './examples/viewchildexamples/viewchildexamples.component';
import { PipeexamplesComponent } from './examples/pipeexamples/pipeexamples.component';
import { HostexamplesComponent } from './examples/hostexamples/hostexamples.component';
import { MenuComponent } from './mainmenu/mainmenu.component';
import { TemplateexamplesComponent } from './examples/templateexamples/components/templateexamples/templateexamples.component';
import { DirectiveexamplesComponent } from './examples/directiveexamples/directiveexamples/directiveexamples.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { EncryptdecryptComponent } from './examples/encryptdecrypt/encryptdecrypt.component';
import { ComponentsloopsComponent } from './examples/componentsloopsexamples/componentsloops/componentsloops.component';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'main', component: MainComponent },
  { path:'api', component: ApiexamplesComponent },
  { path:'forms', component: FormexamplesComponent },
  { path:'viewchild', component: ViewchildexamplesComponent },
  { path:'pipe', component: PipeexamplesComponent },
  { path:'host', component: HostexamplesComponent },
  { path:'template', component: TemplateexamplesComponent },
  { path:'directive', component: DirectiveexamplesComponent },
  { path:'encryptdecrypt', component: EncryptdecryptComponent },
  { path: 'inputoutput', loadChildren: () => import('./examples/inputoutputexamples/inputoutputexamples.module').then(m => m.InputoutputexamplesModule) },
  { path: 'route', loadChildren: () => import('./examples/routeexamples/routeexamples.module').then(m => m.RouteexamplesModule) },
  { path: 'rxjsexamples', loadChildren: () => import('./examples/rxjsexamples/rxjsexamples.module').then(m => m.RxjsexamplesModule) },
  { path: 'canactivexamples', loadChildren: () => import('./examples/canactivexamples/canactivexamples.module').then(m => m.CanactivexamplesModule) },
  { path: 'lifecycleexamples', loadChildren: () => import('./examples/lifecycleexamples/lifecycleexamples.module').then(m => m.LifecycleexamplesModule) },
  { path: 'ngrxexamples', loadChildren: () => import('./examples/ngrxexamples/ngrxexamples.module').then(m => m.NgrxexamplesModule) },
  { path:'', component: MenuComponent },
  { path: 'testexamples', loadChildren: () => import('./examples/testexamples/testexamples.module').then(m => m.TestexamplesModule) },
  { path: 'nestexamples', loadChildren: () => import('./examples/nestexamples/nestexamples.module').then(m => m.NestexamplesModule) },
  { path: 'uploadexamples', loadChildren: () => import('./examples/uploadexamples/uploadexamples.module').then(m => m.UploadexamplesModule) },
  { path:'componentsloops', component: ComponentsloopsComponent },

  { path: '**', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
