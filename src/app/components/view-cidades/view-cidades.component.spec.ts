import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCidadesComponent } from './view-cidades.component';

describe('ViewCidadesComponent', () => {
  let component: ViewCidadesComponent;
  let fixture: ComponentFixture<ViewCidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
