import {
  PI,
  Circle,
  Rectangle,
  Square,
  RightTriangle,
  Shape,
} from "./shapes-lib";

function getCircleArea(circle: Circle): number {
  const { radius } = circle;
  return radius * radius * PI;
}

function getRectangleArea(rectangle: Rectangle): number {
  const { length, width } = rectangle;
  return length * width;
}

function getSquareArea(square: Square): number {
  const { width } = square;
  return width * width;
  return getRectangleArea({ width, length: width, type: "rectangle" });
}

function getRightTriangleArea(triangle: RightTriangle): number {
  const { base, height } = triangle;
  return (base * height) / 2;
}

export const getArea = (shape: Shape) => {
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
};
