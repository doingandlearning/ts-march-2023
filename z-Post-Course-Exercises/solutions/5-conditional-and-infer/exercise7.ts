type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;

type A = UnwrapPromise<Promise<string>>;
