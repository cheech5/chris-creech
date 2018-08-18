import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TictactoePythonCardComponent } from './tictactoe-python-card.component';

describe('TictactoePythonCardComponent', () => {
  let component: TictactoePythonCardComponent;
  let fixture: ComponentFixture<TictactoePythonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TictactoePythonCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TictactoePythonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
