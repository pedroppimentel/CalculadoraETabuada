import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalcComponent } from './calc.component';
import { CalcService } from './calc.service';

@NgModule({
  imports: [
    CommonModule,    
  ],
  declarations: [
    CalcComponent
  ],
  exports: [
    CalcComponent
  ],
  providers: [
    CalcService, 
  ]
})
export class CalcModule { }
