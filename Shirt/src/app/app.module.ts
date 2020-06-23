import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemSoapComponent } from './item-soap/item-soap.component';
import { SalazarComponent } from './salazar/salazar.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemSoapComponent,
    SalazarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
