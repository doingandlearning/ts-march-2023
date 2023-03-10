async function filterAsync<ArrayType>(
  arr: ArrayType[],
  callback: (item: ArrayType) => Promise<boolean>
): Promise<ArrayType[]> {
  const results: ArrayType[] = [];
  for (const item of arr) {
    const shouldInclude = await callback(item);
    if (shouldInclude) {
      results.push(item);
    }
  }
  return results;
}

(async () => {
  const arr = [1, 2, 3];
  const result = await filterAsync(arr, async (item) => item % 2 === 0);
  console.log(result); // [2]
})();
