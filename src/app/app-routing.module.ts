import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CalculatorComponent} from './calculator/calculator.component';
import {FeedbackComponent} from './feedback/feedback.component';


const routes: Routes = [
  // {path: '', redirectTo: '/feedback', pathMatch: 'full'},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'feedback', component: FeedbackComponent},

  {path: '', redirectTo: '/calulator', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
