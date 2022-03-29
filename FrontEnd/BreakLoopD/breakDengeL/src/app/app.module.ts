import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DenguelistComponent } from './dengueCases/dengueCase-list.components';
import { FormsModule } from '@angular/forms';
import { ConvertToPipe } from './shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DenguelistComponent,
    ConvertToPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
