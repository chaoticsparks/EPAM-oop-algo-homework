import { Point } from './Point';


export abstract class Shape {
  abstract getType(): string;

  constructor(points: Point[])
  constructor(points: Point[], color: string, filled: boolean)
  constructor(
    protected readonly points: Point[],
    protected readonly color: string = 'green',
    protected readonly filled: boolean = true
  ) {
    if (points.length < 3) {
      throw new Error(
        'Wrong coordinates in the constructor params! At least 3 point have to be passed');
    }
  }

  toString(): string {
    const pointsStr = this.points.map(point => point.toString()).join(', ');
    return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points: ${pointsStr}.`;
  }

  getPerimeter(): number {
    return this.points.reduce((acc, point, i, points) => {
      return acc + point.distance(points[ i + 1 ] || points[ 0 ]);
    }, 0);
  }
}
