async function reduceAsync<ArrayType, AccumulatorType>(
  arr: ArrayType[],
  callback: (
    accumulator: AccumulatorType,
    item: ArrayType
  ) => Promise<AccumulatorType>,
  initial: AccumulatorType
): Promise<AccumulatorType> {
  let accumulator = initial;
  for (const item of arr) {
    accumulator = await callback(accumulator, item);
  }
  return accumulator;
}

(async () => {
  const arr = [1, 2, 3];
  const result = await reduceAsync(
    arr,
    async (accumulator, item) => accumulator + item,
    0
  );
  console.log(result); // 6
})();
