import { Component, OnInit } from '@angular/core';
import { CalcService } from './calc.service';

@Component({
  selector: 'CalcComponent',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'],
})

export class CalcComponent implements OnInit {

  private n1: number;
  private n2: number;
  private op: string;
  public result: number;

  constructor(private calcService: CalcService) { }

  ngOnInit() {
    this.clear();
  }

  clear(): void {
    this.n1 = 0;
    this.n2 = 0;
    this.result = null;
    this.op = null;
  }

  calcular(num1: number, num2: number, opV: string): void {
    this.n1 = num1;
    this.n2 = num2;
    this.op = opV;

    this.result = this.calcService.calcular(this.n1, this.n2, this.op);
  }
}
