import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartedBgComponent } from './started-bg.component';

describe('StartedBgComponent', () => {
  let component: StartedBgComponent;
  let fixture: ComponentFixture<StartedBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartedBgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartedBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
