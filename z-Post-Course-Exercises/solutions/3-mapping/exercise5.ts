type SnakeToCamel<S extends string> = S extends `${infer A}_${infer B}`
  ? `${Lowercase<A>}${SnakeToCamel<Capitalize<B>>}`
  : `${Lowercase<S>}`;

type CamelCaseKeys<T> = {
  [K in keyof T as SnakeToCamel<K & string>]: T[K];
};
