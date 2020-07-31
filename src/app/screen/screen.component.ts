import { Component, OnInit } from '@angular/core';

import { Expression } from '../expression';
import { MemoryService } from '../memory.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {

  expr: Expression;

  constructor(private memoryService: MemoryService) { }

  ngOnInit(): void {
    this.expr = this.memoryService.getExpr();
  }

}
