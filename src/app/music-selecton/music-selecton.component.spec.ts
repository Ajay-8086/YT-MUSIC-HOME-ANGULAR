import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicSelectonComponent } from './music-selecton.component';

describe('MusicSelectonComponent', () => {
  let component: MusicSelectonComponent;
  let fixture: ComponentFixture<MusicSelectonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicSelectonComponent]
    });
    fixture = TestBed.createComponent(MusicSelectonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
