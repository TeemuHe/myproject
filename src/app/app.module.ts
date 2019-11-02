import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
