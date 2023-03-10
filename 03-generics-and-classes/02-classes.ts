// Prototypal -> prototypical inheritance

// const dog = {
//   bark() {
//     console.log("Woof!");
//   },
// };

export interface Animal {
  sayHello(): void;
}

interface Pet {
  vet: string;
  adoptionDate: Date;
}

class Dog implements Animal, Pet {
  constructor(
    public name: string, // private, protected
    public location: string,
    public vet: string,
    public adoptionDate: Date
  ) {}
  bark() {
    console.log("Woof!");
  }
  sayHello(): void {
    this.bark();
  }
}

const rex = new Dog("Rex", "Leeds", "Bob", new Date("2020-03-01"));
rex.bark();
rex.name;
rex.location;

console.log(rex);

export interface IGreeter {
  greet(name: string): string;
}

export interface Logger {
  location: string;
  date: Date;
  accent: string;
}

export class Greeter implements IGreeter, Logger {
  greet(name: string): string {
    return `Hello ${name}`;
  }

  constructor(
    public location: string,
    public accent: string,
    public date: Date
  ) {}
}

const myGreeter = new Greeter("Downpatrick", "Northern Irish", new Date());

export abstract class School {
  static locator() {
    console.log("I'm right here!");
  }

  constructor(readonly name: string) {}

  abstract getStudentTypes(): string[];
}

class GoogleMaps {
  static locator() {
    console.log("Here I am");
  }
}

class PreSchool extends School implements GoogleMaps {
  getStudentTypes(): string[] {
    return ["preschooler"];
  }
}

let school = new PreSchool("Shiny Happy People Holding Hands");
console.log(school.getStudentTypes());
console.log(PreSchool.locator());

export class Logs {
  log() {
    console.log("Logs method");
  }
}

export class Logs2 {
  log() {
    console.log("Logs2 method");
  }
}

export class BestLoggerEver implements Logger {
  constructor(
    public location: string,
    public date: Date,
    public accent: string
  ) {}
  log() {
    console.log("This will get called!");
  }
}
