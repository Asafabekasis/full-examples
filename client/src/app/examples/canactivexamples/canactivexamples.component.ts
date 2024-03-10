import { Component, OnInit } from '@angular/core';
import ActivateGuard from './activate-guard';

@Component({
  selector: 'app-canactivexamples',
  templateUrl: './canactivexamples.component.html',
  styleUrls: ['./canactivexamples.component.scss'],
})
export class CanactivexamplesComponent {
  constructor(public activateGuard: ActivateGuard) {}
  checkboxChanged(canActivate) {
    this.activateGuard.setCanActivate(canActivate);
  }
}
