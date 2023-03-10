function memoizeAsync<InputType, ReturnType>(
  fn: (input: InputType) => Promise<ReturnType>
): (input: InputType) => Promise<ReturnType> {
  const cache = new Map<InputType, ReturnType>();

  return async function (input: InputType): Promise<ReturnType> {
    const cachedValue = cache.get(input);
    if (cachedValue !== undefined) {
      return cachedValue;
    }
    const result = await fn(input);
    cache.set(input, result);
    return result;
  };
}

(async () => {
  const expensiveFunction = async (input: number) => {
    await delay(1000);
    return input * 2;
  };

  const memoizedFunction = memoizeAsync(expensiveFunction);

  console.log(await memoizedFunction(5)); // takes 1 second
  console.log(await memoizedFunction(5)); // returns immediately
  console.log(await memoizedFunction(6)); // takes 1 second
})();
