type PickByType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K];
};

interface Person {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
}

type StringPropsOnly = PickByType<Person, string>;
