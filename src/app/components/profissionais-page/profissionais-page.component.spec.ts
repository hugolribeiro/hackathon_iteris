import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionaisPageComponent } from './profissionais-page.component';

describe('ProfissionaisPageComponent', () => {
  let component: ProfissionaisPageComponent;
  let fixture: ComponentFixture<ProfissionaisPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfissionaisPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionaisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
