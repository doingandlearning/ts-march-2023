abstract class Shape {
  abstract getType(): "circle" | "rectangle" | "square" | "rightTriangle";
  abstract getArea(): number;
}

export class Circle implements Shape {
  PI = Math.PI;

  constructor(public radius: number) {}

  getArea() {
    return this.radius * this.radius * this.PI;
  }

  getType() {
    return "circle";
  }
}

export interface Rectangle extends Shape {
  type: "rectangle";
  length: number;
  width: number;
}

export interface Square extends Shape {
  type: "square";
  width: number;
}

export interface RightTriangle extends Shape {
  type: "rightTriangle";
  base: number;
  height: number;
}
