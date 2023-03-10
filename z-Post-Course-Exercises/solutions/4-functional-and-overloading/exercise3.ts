const sumOfEvenNumbers = (arr: number[]): number => {
  return arr.filter((num) => num % 2 === 0).reduce((sum, num) => sum + num, 0);
};
