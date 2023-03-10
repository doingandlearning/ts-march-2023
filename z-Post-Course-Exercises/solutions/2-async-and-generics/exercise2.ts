async function mapAsync<ArrayType, ResultType>(
  arr: ArrayType[],
  callback: (item: ArrayType) => Promise<ResultType>
): Promise<ResultType[]> {
  const results: ResultType[] = [];
  for (const item of arr) {
    const result = await callback(item);
    results.push(result);
  }
  return results;
}

(async () => {
  const arr = [1, 2, 3];
  const result = await mapAsync(arr, async (item) => item * 2);
  console.log(result); // [2, 4, 6]
})();
