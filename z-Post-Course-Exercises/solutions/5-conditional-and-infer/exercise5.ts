type Omit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};

interface Person {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
}

type WithoutAge = Omit<Person, "age">;

export default {};
