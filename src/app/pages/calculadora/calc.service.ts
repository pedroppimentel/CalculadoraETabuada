import { Injectable } from '@angular/core';

@Injectable()
export class CalcService {
  static readonly SUM: string = '+';
  static readonly SUB: string = '-';
  static readonly MUL: string = '*';
  static readonly DIV: string = '/';

  constructor() { }

  calcular(n1: number, n2: number, op: string): number {
    let res: number;

    switch (op) {
      case CalcService.SUM:
        res = Number(n1) + Number(n2);
        break;
      case CalcService.SUB:
        res = n1 - n2;
        break;
      case CalcService.DIV:
        res = n1 / n2;
        break;
      case CalcService.MUL:
        res = n1 * n2;
        break;
      default:
        res = 0;
    }
    return res;
  }

}

