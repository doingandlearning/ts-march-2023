async function retry<InputType, ReturnType>(
  fn: (input: InputType) => Promise<ReturnType>,
  retries: number,
  input: InputType
): Promise<ReturnType> {
  try {
    const result = await fn(input);
    return result;
  } catch (error) {
    if (retries <= 0) {
      throw error;
    }
    console.error(`Error: ${error.message}. Retrying...`);
    return retry(fn, retries - 1, input);
  }
}

function someAsyncFunction(input: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve(input * 2);
    } else {
      reject(new Error("Random failure"));
    }
  });
}

(async () => {
  const result = await retry(someAsyncFunction, 3, 5);
  console.log(result);
})();
