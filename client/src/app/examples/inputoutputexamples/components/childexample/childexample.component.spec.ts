import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildexampleComponent } from './childexample.component';

describe('ChildexampleComponent', () => {
  let component: ChildexampleComponent;
  let fixture: ComponentFixture<ChildexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildexampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
