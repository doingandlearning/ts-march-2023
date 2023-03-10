type RequiredDeep<T> = {
  [K in keyof T]-?: T[K] extends Record<string, unknown>
    ? RequiredDeep<T[K]>
    : T[K];
};
