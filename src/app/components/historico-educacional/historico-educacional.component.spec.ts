import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoEducacionalComponent } from './historico-educacional.component';

describe('HistoricoEducacionalComponent', () => {
  let component: HistoricoEducacionalComponent;
  let fixture: ComponentFixture<HistoricoEducacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoEducacionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoEducacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
