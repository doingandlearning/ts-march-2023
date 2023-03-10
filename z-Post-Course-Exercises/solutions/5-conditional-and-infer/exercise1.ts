type IsArray<T> = T extends any[] ? true : false;

type A = IsArray<number[]>;
type B = IsArray<string>;
