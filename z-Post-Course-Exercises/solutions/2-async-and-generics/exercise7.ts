async function parallel<ReturnType>(
  functions: (() => Promise<ReturnType>)[]
): Promise<ReturnType[]> {
  const promises = functions.map((fn) => fn());
  return Promise.all(promises);
}

(async () => {
  const result = await parallel([async () => 1, async () => 2, async () => 3]);
  console.log(result); // [1, 2, 3]
})();
