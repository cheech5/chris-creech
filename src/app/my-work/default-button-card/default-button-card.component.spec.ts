import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultButtonCardComponent } from './default-button-card.component';

describe('DefaultButtonCardComponent', () => {
  let component: DefaultButtonCardComponent;
  let fixture: ComponentFixture<DefaultButtonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultButtonCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultButtonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
