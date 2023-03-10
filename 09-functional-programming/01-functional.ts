// Functional Programming

// Easier to test

// Pure functions ...
// ... same input always same output

let base = 5;

function add(a: number, b: number) {
  return a + b + base;

  // React.useEffect()
}

// Composition
// Concurrency
// Caching

{
  interface Person {
    name: string;
    age: number;
  }

  const getGreeting = (person: Person): string => {
    return `Hello ${person.name}, you are ${person.age} years old!`;
  };

  const person: Person = { name: "Ethan", age: 10 };

  const greeting = getGreeting(person);
}

// Higher Order Functions

{
  interface Person {
    name: string;
    age: number;
  }

  const getGreeting = (person: Person): string => {
    return `Hello ${person.name}, you are ${person.age} years old!`;
  };

  const mapPerson =
    <T>(fn: (person: Person) => T) =>
    (persons: Person[]): T[] =>
      persons.map(fn);

  const persons = [
    { name: "Ethan", age: 10 },
    { name: "Caleb", age: 8 },
  ];

  const greetings = mapPerson(getGreeting)(persons);
  console.log(greetings);
}

// Composability ... currying

{
  interface Person {
    greet(): string;
    anotherGreet: () => string;
  }

  const compose =
    <FirstType, FirstOutput, SecondOutput>(
      firstFunction: (x: FirstType) => FirstOutput,
      secondFunction: (x: FirstOutput) => SecondOutput
    ) =>
    (input: FirstType) =>
      secondFunction(firstFunction(input));

  const addFive = (a: number) => a + 5; // get viewing history
  const double = (a: number) => a * 2; // get recommendations from viewing history

  const addFiveAndDouble = compose(addFive, double);

  const answer = addFiveAndDouble(10); // Log out 30

  // function anotherFunction(): ReturnType {}

  const yetAnotherFunction = (a: number): number => {
    return 4;
  };
}

// Arrays
{
  const arr = [1, 5, 3123, 31, 4, 311];

  const double = arr
    .filter((num) => num % 2 === 0)
    .map((num) => num * 2)
    .map((num) => num + 5); // [2, 10, 6]
  console.log(double);
  // arr.filter();
  const evens = arr.filter((num) => num % 2 === 0);
  // console.log(evens, arr);
  // arr.reduce();
  const sum = arr.reduce((total, num) => total + num, 0);
  // console.log(sum, arr);

  const sorted = arr.sort((a, b) => a - b);
  const sorted2 = arr.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log(sorted, arr);
  console.log(sorted2, arr);

  // arr.toSorted();
}
