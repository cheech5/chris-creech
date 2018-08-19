import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBookCardComponent } from './recipe-book-card.component';

describe('RecipeBookCardComponent', () => {
  let component: RecipeBookCardComponent;
  let fixture: ComponentFixture<RecipeBookCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeBookCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeBookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
