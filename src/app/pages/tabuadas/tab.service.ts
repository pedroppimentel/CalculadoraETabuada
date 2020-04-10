import { Injectable } from '@angular/core';

@Injectable()
export class TabService {

  constructor() { }

  calcular(fator1: number, fator2: number, op: string, result: number): void {
    for (let i = 1; i < 11; i++) {
      result = fator1 * i;
      fator2 = i;
      op = '*';
      document.getElementById('fat1_' + i).innerHTML = fator1.toString();
      document.getElementById('fat2_' + i).innerHTML = fator2.toString();
      document.getElementById('op_' + i).innerHTML = op;
      document.getElementById('res_' + i).innerHTML = result.toString();
    }
  }
}


