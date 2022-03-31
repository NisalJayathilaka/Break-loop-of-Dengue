import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DenguelistComponent } from './dengueCases/dengueCase-list.components';
import { FormsModule } from '@angular/forms';
import { ConvertToPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { DengueCasesDetailsComponent } from './dengueCases/dengue-cases-details.component';

import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    DenguelistComponent,
    ConvertToPipe,
    StarComponent,
    DengueCasesDetailsComponent,
    WelcomeComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'cases', component:DenguelistComponent },
      { path:'cases/:id', component:DengueCasesDetailsComponent },
       { path: 'welcome',component:WelcomeComponent},
      { path: '', redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
