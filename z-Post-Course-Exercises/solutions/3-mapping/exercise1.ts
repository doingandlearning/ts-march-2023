type DeepReadOnly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadOnly<T[K]> : T[K];
};
