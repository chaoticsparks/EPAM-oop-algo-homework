import { Point } from './Point';
import { Shape } from './Shape';


export class Triangle extends Shape {

  constructor(v1: Point, v2: Point, v3: Point)
  constructor(v1: Point, v2: Point, v3: Point, color: string, filled: boolean)
  constructor(v1: Point, v2: Point, v3: Point, color?: string, filled?: boolean) {
    if (!v1 || !v2 || !v3) {
      throw new Error(
        'Wrong coordinates in the constructor params! Pass three Points to create a triangle');
    }
    super([v1, v2, v3], color, filled);
  }

  toString(): string {
    return `Triangle[v1=${this.points[ 0 ].toString()},v2=${this.points[ 1 ].toString()},v3=${this.points[ 2 ].toString()}]`;
  }

  getType(): string {
    const v1 = this.points[ 0 ];
    const v2 = this.points[ 1 ];
    const v3 = this.points[ 2 ];

    const s12 = Triangle.getSideLength(v1, v2);
    const s23 = Triangle.getSideLength(v2, v3);
    const s31 = Triangle.getSideLength(v3, v1);

    if (s12 === s23 && s23 === s31 && s12 === s31) {
      return `equilateral triangle`;
    }

    if (s12 === s23 || s23 === s31 || s12 === s31) {
      return `isosceles triangle`;
    }

    return 'scalene triangle';
  }

  private static getSideLength(v1: Point, v2: Point) {
    return Number(v1.distance(v2).toFixed(2));
  }
}
