function reverseArray<ArrayType>(arr: ArrayType[]): ArrayType[] {
  return arr.reverse();
}
console.log(reverseArray<number>([1, 2, 3, 4, 5])); // [5,4,3,2,1]
console.log(reverseArray<string>(["Hello", "World"])); // ["World", "Hello"]
