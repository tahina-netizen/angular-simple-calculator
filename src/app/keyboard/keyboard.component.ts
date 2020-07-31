import { Component, OnInit } from '@angular/core';

import { Expression } from '../expression';
import { MemoryService } from '../memory.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  constructor(private memoryService: MemoryService) { }

  ngOnInit(): void {}

  handleInput(input: string): void {
    let operators = ['+', '-', '*', '/'];
    let expr = this.memoryService.getExpr();
    if (this.memoryService.selected === 'arg1'){
      if(!operators.includes(input)){
        expr.arg1 = parseInt(expr.arg1.toString() + input)
      }
    }
    else if (this.memoryService.selected === 'operator'){
      if(operators.includes(input)){
        expr.operator = input;
      }
    }
    else {
      if(!operators.includes(input)){
        expr.arg2 = parseInt(expr.arg2.toString() + input)
      }
    }
  }

  clearExpr(): void {
    this.memoryService.clearExpr();
  }

  evaluateExpr(): number {
    return this.memoryService.evaluateExpr()
  }

}
