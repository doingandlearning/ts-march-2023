import { Box } from "../../../03-generics-and-classes/01-generics";

function getBoxOutside<InsideType, OutsideType>(
  box: Box<InsideType, OutsideType>
): OutsideType {
  return box.outside;
}

const stringyBox: Box<string, number> = {
  inside: "Hello",
  outside: 10,
};

console.log(getBoxOutside<string, number>(stringyBox)); // 10
