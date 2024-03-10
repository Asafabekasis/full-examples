import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export default class ActivateGuard implements CanActivate {
  private can: boolean = false;

  canActivate() {
    if (!this.can) {
      console.log('ActivateGuard#canActivate called, can false: ', this.can);
      return false;
    }
    console.log('ActivateGuard#canActivate called, can true: ', this.can);
    return true;
  }

  setCanActivate(can) {
    this.can = can;
    console.log('set Can Activate', this.can);
  }
}
