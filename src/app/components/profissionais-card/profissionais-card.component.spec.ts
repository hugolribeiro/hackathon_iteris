import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionaisCardComponent } from './profissionais-card.component';

describe('ProfissionaisCardComponent', () => {
  let component: ProfissionaisCardComponent;
  let fixture: ComponentFixture<ProfissionaisCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfissionaisCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionaisCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
