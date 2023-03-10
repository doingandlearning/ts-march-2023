type ReplaceKeys<T, OldKeys extends keyof T, NewKeys extends keyof any> = Omit<
  T,
  OldKeys
> & { [K in NewKeys]: K extends keyof T ? T[K] : never };
