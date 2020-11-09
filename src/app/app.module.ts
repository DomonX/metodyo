import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lab1Component } from './lab1/lab1.component';
import { Lab3Component } from './lab3/lab3.component';

@NgModule({
  declarations: [
    AppComponent,
    Lab1Component,
    Lab3Component
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    InputNumberModule,
    FormsModule,
    ButtonModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
