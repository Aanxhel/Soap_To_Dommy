import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
