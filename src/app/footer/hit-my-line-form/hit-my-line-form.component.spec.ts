import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HitMyLineFormComponent } from './hit-my-line-form.component';

describe('HitMyLineFormComponent', () => {
  let component: HitMyLineFormComponent;
  let fixture: ComponentFixture<HitMyLineFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitMyLineFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitMyLineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
