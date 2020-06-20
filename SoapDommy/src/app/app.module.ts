import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticuloComponent } from './articulo/articulo.component';             //se crea componente [proyecto][component]

@NgModule({
  declarations: [
    AppComponent,ArticuloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
