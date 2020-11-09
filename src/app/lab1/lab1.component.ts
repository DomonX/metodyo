import { Component, OnInit } from '@angular/core';
import * as math from 'mathjs';

@Component({
  selector: 'app-lab1',
  templateUrl: './lab1.component.html',
  styleUrls: ['./lab1.component.scss']
})
export class Lab1Component implements OnInit {

  result: number;
  textRes: string[];

  values: string;
  x: number;

  constructor() { }

  ngOnInit() { }

  horner(): void {
    this.textRes = [];
    const tab = this.values.split(' ').map(x => Number.parseFloat(x));
    this.result = tab.reduce((acc, curr, index) => {
      const res = acc * this.x + curr;
      this.textRes.push(`${acc} * ${this.x} ${curr >= 0 ? '+' : '-'} ${math.abs(curr)} = ${res}`);
      return res;
    });
  }

}
