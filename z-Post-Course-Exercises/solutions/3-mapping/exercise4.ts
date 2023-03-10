type CamelToSnake<S extends string> = S extends `${infer A}${infer B}`
  ? `${A extends Uppercase<A> ? "_" : ""}${Lowercase<A>}${CamelToSnake<B>}`
  : S;

type SnakeCaseKeys<T> = {
  [K in keyof T as CamelToSnake<K & string>]: T[K];
};
