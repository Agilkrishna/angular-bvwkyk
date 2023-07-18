import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'exercise/1',

    loadChildren: () =>
      import('./exercises/exercise1/exercise1.module').then(
        (module) => module.Exercise1Module
      ),
  },

  {
    path: 'exercise/2',

    loadChildren: () =>
      import('./exercises/exercise2/exercise2.module').then(
        (module) => module.Exercise2Module
      ),
  },

  {
    path: 'exercise/3',

    loadChildren: () =>
      import('./exercises/exercise3/exercise3.module').then(
        (module) => module.Exercise3Module
      ),
  },

  {
    path: 'exercise/4',

    loadChildren: () =>
      import('./exercises/exercise4/exercise4.module').then(
        (module) => module.Exercise4Module
      ),
  },

  {
    path: '**',

    loadChildren: () =>
      import('./exercises/exerciseNotFound/exerciseNotFound.module').then(
        (module) => module.ExerciseNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
