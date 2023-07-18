import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseNotFoundComponent } from './exerciseNotFound.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ExerciseNotFoundComponent],
  imports: [CommonModule,
    
    RouterModule.forChild([
      {
        path: '',
        component: ExerciseNotFoundComponent,
      },
    ]),],
})
export class ExerciseNotFoundModule {}
