import { CanDeactivate } from '@angular/router';
import ComponentTwo from './component-two';
import { Injectable } from '@angular/core';

@Injectable()
export default class DeactivateGuard implements CanDeactivate<ComponentTwo> {
  canDeactivate(component: ComponentTwo) {
    let can = component.canDeactivate() || false
    console.log('DeactivateGuard#canDeactivate called, can: ', can);
    if (!can) {
      return false;
    }
    return true;
  }
}
