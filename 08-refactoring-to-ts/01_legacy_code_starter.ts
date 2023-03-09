import {
  Circle,
  PI,
  Rectangle,
  RightTriangle,
  Shape,
  Square,
} from "./shapes-lib-with-classes";

function getCircleArea({ radius }: Circle) {
  return radius * radius * PI;
}

function getRectangleArea({ length, width }: Rectangle) {
  return length * width;
}

function getSquareArea({ width }: Square) {
  return width * width;
}

function getRightQuadArea({ width, ...rest }: Rectangle | Square): number {
  let length = width;
  if (length in rest) {
    length = length;
  }
  return width * length;
}

function getRightTriangleArea({ base, height }: RightTriangle) {
  return (base * height) / 2;
}

function getArea(shape: Shape) {
  switch (shape.type) {
    case "circle":
      shape.area = getCircleArea(shape as Circle);
      break;
    case "rectangle":
      shape.area = getRectangleArea(shape as Rectangle);
      break;
    case "square":
      shape.area = getSquareArea(shape as Square);
      break;
    case "rightTriangle":
      shape.area = getRightTriangleArea(shape as RightTriangle);
      break;
  }
}

const circle: Circle = { type: "circle", radius: 4 };

getArea(circle);
console.log(circle);

const rectangle: Rectangle = { type: "rectangle", length: 7, width: 4 };
getArea(rectangle);
console.log(rectangle);

const square: Square = { type: "square", width: 5 };
getArea(square);
console.log(square);

const rightTriangle: RightTriangle = {
  type: "rightTriangle",
  base: 9,
  height: 4,
};
getArea(rightTriangle);
console.log(rightTriangle);
