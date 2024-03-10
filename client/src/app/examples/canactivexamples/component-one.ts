import { Component } from '@angular/core';

@Component({
  selector: 'component-one',
  template: `<div class="component-wrapper">
    <h4>Component One</h4>
    <nav>
      <a [routerLink]="['/canactivexamples']"
        >Navigate To CanActivate Examples Component(module Default Component) No Guuards No Destroy</a
      >
    </nav>
  </div>`,
})
export default class ComponentOne {}
