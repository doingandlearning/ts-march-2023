function findElement<T>(
  arr: T[],
  predicate: (value: T) => boolean
): T | undefined;
function findElement<T>(arr: T[], value: T): T | undefined;
function findElement<T>(arr: T[], arg2: any): T | undefined {
  if (typeof arg2 === "function") {
    return arr.find(arg2);
  }
  return arr.find((value) => value === arg2);
}
