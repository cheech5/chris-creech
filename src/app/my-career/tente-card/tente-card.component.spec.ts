import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenteCardComponent } from './tente-card.component';

describe('TenteCardComponent', () => {
  let component: TenteCardComponent;
  let fixture: ComponentFixture<TenteCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenteCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
