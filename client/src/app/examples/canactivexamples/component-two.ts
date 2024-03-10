import { Component, OnDestroy } from '@angular/core';
import ActivateGuard from './activate-guard';

@Component({
  selector: 'component-two',
  template: `
    <div class="component-wrapper">
      <h4>Component Two</h4>
      <nav>
        <a [routerLink]="['/canactivexamples/component-one']">Navigate To Component One</a>
        <br />
      </nav>

      <div style="margin-top: 10px;">
        Can deactivate:
        <input
          #candeactivate
          type="checkbox"
          (change)="checkboxChanged(candeactivate.checked)"
        />
      </div>
      <p>
        Try navigating away (back to canactivexamples or to component one). It
        will be blocked unless "Can deactivate" checkbox is checked.
      </p>
    </div>
  `,
})
export default class ComponentTwo implements OnDestroy {
  private checked: boolean;
  constructor(public activateGuard: ActivateGuard) {}
  ngOnDestroy(): void {
    this.activateGuard.setCanActivate(false);
  }

  canDeactivate(): boolean {
    return this.checked;
  }

  checkboxChanged(checked: boolean): void {
    this.checked = checked;
  }
}
