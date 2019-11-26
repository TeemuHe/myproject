import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CalculatorComponent} from './calculator/calculator.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {FormComponent} from './form/form.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CinemaComponent} from './cinema/cinema.component';


const routes: Routes = [
  // {path: '', redirectTo: '/feedback', pathMatch: 'full'},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'form' , component: FormComponent},
  {path: 'reactiveform', component: ReactiveFormComponent},
  {path: 'cinema', component: CinemaComponent},

  {path: '', redirectTo: '/calculator', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
