function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
  console.log("Start");
  await delay(1000);
  console.log("End");
})();
