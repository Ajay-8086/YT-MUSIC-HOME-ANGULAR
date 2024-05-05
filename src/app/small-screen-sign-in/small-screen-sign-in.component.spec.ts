import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallScreenSignInComponent } from './small-screen-sign-in.component';

describe('SmallScreenSignInComponent', () => {
  let component: SmallScreenSignInComponent;
  let fixture: ComponentFixture<SmallScreenSignInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallScreenSignInComponent]
    });
    fixture = TestBed.createComponent(SmallScreenSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
