import { getArea } from "./01_legacy_code_solution";
import * as ShapeTypes from "./shapes-lib";

const circle: ShapeTypes.Circle = { type: "circle", radius: 4 };
getArea(circle);
console.log(circle);

const rectangle: ShapeTypes.Rectangle = {
  type: "rectangle",
  length: 7,
  width: 4,
};
getArea(rectangle);
console.log(rectangle);

const square: ShapeTypes.Square = { type: "square", width: 5 };
getArea(square);
console.log(square);

const rightTriangle: ShapeTypes.RightTriangle = {
  type: "rightTriangle",
  base: 9,
  height: 4,
};
getArea(rightTriangle);
console.log(rightTriangle);
