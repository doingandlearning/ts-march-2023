import { Animal } from "../../../03-generics-and-classes/02-classes";

class Cat implements Animal {
  sayHello(): void {
    this.meow();
  }

  meow(): void {
    console.log("Meow!");
  }
}

const kitty = new Cat();
kitty.sayHello();
