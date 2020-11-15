import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Lab1Component } from './lab1/lab1.component';
import { Lab3Component } from './lab3/lab3.component';
import { Lab4Component } from './lab4/lab4.component';

const routes: Routes = [
  { path: 'lab1', component: Lab1Component },
  { path: 'lab3', component: Lab3Component },
  { path: 'lab4', component: Lab4Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
