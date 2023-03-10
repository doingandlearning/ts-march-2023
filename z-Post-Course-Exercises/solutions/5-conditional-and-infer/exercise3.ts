type Flatten<T extends any[]> = T extends [infer H, ...infer R]
  ? [...(H extends any[] ? Flatten<H> : [H]), ...Flatten<R>]
  : [];

type A = Flatten<[number, [string, boolean], [bigint]]>;
