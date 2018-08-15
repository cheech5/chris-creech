import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IherbCardComponent } from './iherb-card.component';

describe('IherbCardComponent', () => {
  let component: IherbCardComponent;
  let fixture: ComponentFixture<IherbCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IherbCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IherbCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
