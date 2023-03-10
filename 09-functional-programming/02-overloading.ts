// Overloading ...

function add(a: number, b: number) {
  return a + b;
}

function addThree(a: number, b: number, c: number) {
  return a + b + c;
}

function addMany(...nums: number[]) {
  return nums.reduce((a, c) => a + c, 0);
}

function overload(name: string, age: number): string;
/**
 *
 * @param age
 * @param height
 */
function overload(age: number, height: string): string;
function overload(isSingle: boolean): string;
function overload(
  value: string | number | boolean,
  age?: number | string
): string {
  switch (typeof value) {
    case "string":
      return `Hello, my name is ${value} and I am ${age} years old.`;
    case "number":
      return `Hello, I am ${value} years old.`;
    case "boolean":
      return `Hello, I ${value ? "am" : "am not"} single.`;
    default:
      throw new Error("Invalid use of this function.");
  }
}

// console.log(overload());

// Example from the DOM

document.createElement();
document.createEvent();
