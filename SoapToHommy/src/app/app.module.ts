import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //lanzamiento de bootstrap tomando AppComponentde el archivo main.ts
  bootstrap: [AppComponent]
})
export class AppModule { }
