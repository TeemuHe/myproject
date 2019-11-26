import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatExpansionModule,
  MatFormFieldModule,
  MatMenuModule,
  MatSliderModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FeedbackComponent } from './feedback/feedback.component';
import {RouterModule} from '@angular/router';
import { FormComponent } from './form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatIconModule} from '@angular/material/icon';
import {FeedbackService} from './services/feedback.service';
import { CinemaComponent } from './cinema/cinema.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ToolbarComponent,
    FeedbackComponent,
    FormComponent,
    ReactiveFormComponent,
    PageNotFoundComponent,
    CinemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatIconModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [
    FeedbackService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
