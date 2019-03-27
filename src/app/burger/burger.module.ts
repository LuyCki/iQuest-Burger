import { NgModule } from '@angular/core';

import { BreadTopComponent } from './bread-top/bread-top.component';
import { TomatoesComponent } from './tomatoes/tomatoes.component';
import { SaladComponent } from './salad/salad.component';
import { CheeseComponent } from './cheese/cheese.component';
import { MeatComponent } from './meat/meat.component';
import { BreadBottomComponent } from './bread-bottom/bread-bottom.component';
import { BurgerComponent } from './burger.component';
import { PlateComponent } from './plate/plate.component';

@NgModule({
  declarations: [
    BreadTopComponent,
    TomatoesComponent,
    SaladComponent,
    CheeseComponent,
    MeatComponent,
    BreadBottomComponent,
    BurgerComponent,
    PlateComponent
  ],
  exports: [
    BurgerComponent
  ]
})
export class BurgerModule { }
