import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise4Component } from './exercise4.component';
import { ProductListComponent } from './product-list.component';
import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    Exercise4Component,
    ProductListComponent,
    ProductComponent,
    ],
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Exercise4Component,
      },
    ]),],
})
export class Exercise4Module {}
