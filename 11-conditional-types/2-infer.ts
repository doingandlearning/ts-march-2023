{
  type ReturnType<T extends (...args: any[]) => any> = T extends (
    ...args: any[]
  ) => infer R
    ? R
    : any;

  function repeat(input: string, times: number): string {
    return input.repeat(times);
  }

  type RepeatReturnType = ReturnType<typeof repeat>;
}

{
  type FirstArgument<T> = T extends (
    arg1: infer FirstArgType,
    ...args: any[]
  ) => any
    ? FirstArgType
    : never;

  function greet(name: string, message: string): string {
    return `${message}, ${name}`;
  }

  type GreetArgument = FirstArgument<typeof greet>;
}

{
  type PropertyType<T, K extends keyof T> = T[K] extends infer U ? U : never;

  interface Person {
    name: string;
    age: number;
  }

  const person: Person = { name: "Azlee", age: 2 };

  type PersonName = PropertyType<Person, "name">;
}
