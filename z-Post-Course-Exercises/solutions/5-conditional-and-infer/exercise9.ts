type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

interface Person {
  readonly name: string;
  readonly age: number;
}

type MutablePerson = Mutable<Person>;

export default {};
