export class Point {
  constructor();
  constructor(x: number, y: number)
  constructor(private readonly x: number = 0, private readonly y: number = 0) {}

  toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  distance(): number
  distance(other: Point): number
  distance(x: number, y: number): number
  distance(xOrOther: number | Point = 0, y: number = 0): number {
    let x2: number;
    let y2: number;

    if (xOrOther instanceof Point) {
      x2 = xOrOther.x;
      y2 = xOrOther.y;
    } else {
      x2 = xOrOther;
      y2 = y;
    }

    return Math.sqrt(Math.pow(this.x - x2, 2) + Math.pow(this.y - y2, 2));
  }

}
