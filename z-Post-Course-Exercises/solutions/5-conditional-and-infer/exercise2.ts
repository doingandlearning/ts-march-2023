type Last<T> = T extends [...infer _, infer L] ? L : never;

type A = Last<number[]>;
type B = Last<[string, boolean]>;
