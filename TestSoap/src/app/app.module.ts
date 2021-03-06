import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { ModeraComponent } from './modera/modera.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    ModeraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
