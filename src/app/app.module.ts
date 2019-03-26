import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BreadTopComponent } from './bread-top/bread-top.component';
import { TomatoesComponent } from './tomatoes/tomatoes.component';
import { SaladComponent } from './salad/salad.component';
import { CheeseComponent } from './cheese/cheese.component';
import { MeatComponent } from './meat/meat.component';
import { BreadBottomComponent } from './bread-bottom/bread-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadTopComponent,
    TomatoesComponent,
    SaladComponent,
    CheeseComponent,
    MeatComponent,
    BreadBottomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
