function getSecondElement<ArrayType>(arr: ArrayType[]): ArrayType {
  return arr[1];
}

console.log(getSecondElement<number>([1, 2, 3])); // 2
console.log(getSecondElement<string>(["Hello", "World", "!"])); // "World"
