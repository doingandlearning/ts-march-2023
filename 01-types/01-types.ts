// What is a type?
// Data type
// Primitive values
// number, boolean, null, undefined, symbol, string, bigint
// Type: object

{
  let name = "Kevin";
  console.log(name.length);

  const length = 10;

  let isOn = true;

  let no = undefined;
  let symbol = Symbol();

  let bigNumber = 423423n;
}

{
  let name: string | number = "Bhavani";

  name = "Richard";

  name = "Neil";

  name = 7337;

  // implicit any
  let age;

  age = 8;

  let city: "Glasgow" | "Birmingham" | "London" | "Leeds" | "Manchester" | 10 =
    "Glasgow";

  city = "London";

  city = 10;
}
// Functions
{
  const firstSum = add(12, 6);
  console.log(firstSum);

  function add(number1: number, number2: number): number {
    return number1 + number2;
  }

  const multiple = function (a: number, b: number): number {
    return a * b;
  };
  multiple(3, 4);

  const divide = (a: number, b: number): number => a / b;
  const divideMultiLine = (a: number, b: number): number => {
    // do other work in here
    return a / b;
  };
  divide(5, 2);
}

{
  enum ScreenSize {
    Small = 400,
    Medium = 640,
    Large = 1080,
    XLarge = 2800,
  }

  const box = ScreenSize.Small;

  console.log(box);
  console.log(ScreenSize.Large);
}
