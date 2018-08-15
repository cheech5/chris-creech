import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EkuFedworkaidCardComponent } from './eku-fedworkaid-card.component';

describe('EkuFedworkaidCardComponent', () => {
  let component: EkuFedworkaidCardComponent;
  let fixture: ComponentFixture<EkuFedworkaidCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EkuFedworkaidCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EkuFedworkaidCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
