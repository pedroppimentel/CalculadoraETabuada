import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabComponent } from './tab.component';
import { TabService } from './tab.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TabComponent
  ],
  exports: [
    TabComponent
  ],
  providers: [
    TabService,
  ]
})
export class TabModule { }
