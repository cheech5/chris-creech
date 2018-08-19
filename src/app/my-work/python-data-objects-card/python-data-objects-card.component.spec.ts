import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonDataObjectsCardComponent } from './python-data-objects-card.component';

describe('PythonDataObjectsCardComponent', () => {
  let component: PythonDataObjectsCardComponent;
  let fixture: ComponentFixture<PythonDataObjectsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythonDataObjectsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonDataObjectsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
