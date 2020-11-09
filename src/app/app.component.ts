import { Component } from '@angular/core';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  funStr: string = "(x-2)^2+(x-8)";
  n: number = 10;
  a: number = 0;
  b: number = 10;
  xs: number[];
  round: number = 3;
  values: number[];
  result: number;

  evaluateRectMin(): void {
    const h = (this.b - this.a) / this.n;
    this.xs = this.getXs(h);
    this.values = this.xs.map(x => this.countFunctionValue(x));
    this.result = this.values.slice(0, this.values.length - 1).reduce((acc, curr) => acc + curr, 0) * h;
    this.postProcess();
  }

  evaluateRectMax(): void {
    const h = (this.b - this.a) / this.n;
    this.xs = this.getXs(h);
    this.values = this.xs.map(x => this.countFunctionValue(x));
    this.result = this.values.slice(1, this.xs.length).reduce((acc, curr) => acc + curr, 0) * h;
    this.postProcess();
  }

  evaluateTrapezoid(): void {
    const h = (this.b - this.a) / this.n;
    this.xs = this.getXs(h);
    this.values = this.xs.map(x => this.countFunctionValue(x));
    this.result = (
      this.values
      .slice(0, this.xs.length)
      .map((x, index, array) => array[index + 1] === undefined ? 0 : x + array[index])
      .reduce((acc, curr) => acc + curr, 0)) * h;
    this.postProcess();
  }

  evaluateSimpson(): void {
    const h = (this.b - this.a) / this.n;
    this.xs = this.getXs(h);
    this.values = this.xs.map(x => this.countFunctionValue(x));
    this.result = (
      this.values
      .slice(1, this.values.length - 1)
      .map((value, index) => index % 2 === 0 ? 4 * value : 2 * value)
      .reduce((acc, curr) => acc + curr, 0) + (this.values[0] + this.values[this.values.length]) ) * h / 3;
    this.postProcess();
  }

  private getXs(h: number): number[] {
    const numbs = [];
    let curr = this.a;
    while (curr <= this.b) {
      numbs.push(curr);
      curr += h;
    }
    return numbs;
  }

  private countFunctionValue(x: number): number {
    const rewFunc: string = this.funStr.replace(/x/g, x.toString());
    return evaluate(rewFunc);
  }

  private postProcess(): void {
    this.xs = this.xs.map(x => Number.parseFloat(x.toFixed(this.round)));
    this.values = this.values.map(x => Number.parseFloat(x.toFixed(this.round)));
  }

}
