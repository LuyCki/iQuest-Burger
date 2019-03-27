import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BurgerModule } from './burger/burger.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BurgerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
