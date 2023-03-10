type PartialDeep<T> = {
  [K in keyof T]?: T[K] extends Record<string, any> ? PartialDeep<T[K]> : T[K];
};

interface Person {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
}

type PartialPerson = PartialDeep<Person>;
