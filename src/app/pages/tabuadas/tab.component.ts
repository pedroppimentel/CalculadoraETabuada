import { Component, OnInit } from '@angular/core';
import { TabService } from './tab.service';

@Component({
  selector: 'TabComponent',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {

  public fator1: number;
  public fator2: number;
  public result: number;
  public op: string = '*';

  constructor(private tabService: TabService) { }

  ngOnInit() {
    this.clear();
  }

  clear(): void {
    this.fator1 = 0;
    this.fator2 = 0;
    this.result = null;
  }

  calcular(num: number): void {
    this.fator1 = num;
    this.tabService.calcular(this.fator1, this.fator2, this.op, this.result);  
  }

}
