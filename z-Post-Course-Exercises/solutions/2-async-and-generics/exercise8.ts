async function serial<ReturnType>(
  functions: (() => Promise<ReturnType>)[]
): Promise<ReturnType[]> {
  const results: ReturnType[] = [];
  for (const fn of functions) {
    const result = await fn();
    results.push(result);
  }
  return results;
}

(async () => {
  const result = await serial([async () => 1, async () => 2, async () => 3]);
  console.log(result); // [1, 2, 3]
})();
