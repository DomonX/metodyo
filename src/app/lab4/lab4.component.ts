import { Component, OnInit } from '@angular/core';
import * as math from 'mathjs';

export interface Point {
  x: number;
  y: number;
  i: number;
}

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.component.html',
  styleUrls: ['./lab4.component.scss']
})
export class Lab4Component implements OnInit {

  points: Point[];
  editing: boolean;

  constructor() { }

  ngOnInit() {
    this.points = [];
  }

  deletePoint(id: number): void {
    this.points = [...this.points.filter(i => i.i !== id)];
  }

  addPoint(): void {
    this.points = [ ...this.points, {i: this.points.length, x: 0, y: 0}];
  }

  calculate(): void {
    this.calculatePoint(this.points[0]);
  }

  private calculatePoint(point: Point): void {
    const otherPoints = this.points.filter(i => i.i !== point.i);
    const upperPart = otherPoints.map(i => `(x - ${i.x})`).join(`*`);
    const lowerPart = otherPoints.map(i => `(${point.x  - i.x})`).join(`*`);
    const strEv = `${point.y} * (${upperPart}) / (${lowerPart})`;
    const result = math.evaluate(strEv);
    console.log(result);
  }

}
