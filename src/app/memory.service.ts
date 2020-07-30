import { Injectable } from '@angular/core';

import { Expression } from './expression';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  expr: Expression = new Expression(0, 0, null);
  selected = 'arg1';

  constructor() { }

  setArg1(arg: number): void {
    this.expr.arg1 = arg;
  }

  setArg2(arg: number): void {
    this.expr.arg2 = arg;
  }

  setOperator(operator: string): void {
    this.expr.operator = operator;
  }
  
  evaluateExpr(): number{
    return this.expr.evaluate();
  }

  clearExpr(): void {
    this.expr.arg1 = 0;
    this.expr.arg2 = 0;
    this.expr.operator = null;
    this.expr.value = null;
  }

  getExpr(): Expression{
    return this.expr;
  }
}
