import { Box } from "../../../03-generics-and-classes/01-generics";

function getBoxInside<InsideType, OutsideType>(
  box: Box<InsideType, OutsideType>
): InsideType {
  return box.inside;
}

const stringyBox: Box<string, number> = {
  inside: "Hello",
  outside: 10,
};

console.log(getBoxInside<string, number>(stringyBox)); // "Hello"
