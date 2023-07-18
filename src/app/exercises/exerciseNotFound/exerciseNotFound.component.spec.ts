import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseNotFoundComponent } from './exerciseNotFound.component';

describe('Exercise1Component', () => {
  let component: ExerciseNotFoundComponent;
  let fixture: ComponentFixture<ExerciseNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseNotFoundComponent]
    });
    fixture = TestBed.createComponent(ExerciseNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
