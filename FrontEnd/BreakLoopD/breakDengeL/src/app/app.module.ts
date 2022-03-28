import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DenguelistComponent } from './dengueCases/dengueCase-list.components';

@NgModule({
  declarations: [
    AppComponent,
    DenguelistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
