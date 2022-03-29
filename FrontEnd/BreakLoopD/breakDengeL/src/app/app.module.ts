import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DenguelistComponent } from './dengueCases/dengueCase-list.components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DenguelistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
