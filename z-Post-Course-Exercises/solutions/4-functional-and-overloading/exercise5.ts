const filterMap =
  <T, U>(fn: (value: T) => U | undefined) =>
  (arr: T[]): U[] => {
    return arr.map(fn).filter((value): value is U => value !== undefined);
  };
