function sum<InputType extends number>(a: InputType, b: InputType): number {
  return a + b;
}

console.log(sum(1, 2)); // 3
