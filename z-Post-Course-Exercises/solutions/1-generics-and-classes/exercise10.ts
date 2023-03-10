import { Animal } from "../../../03-generics-and-classes/02-classes";

class Bird implements Animal {
  sayHello(): void {
    this.tweet();
  }

  tweet(): void {
    console.log("Tweet tweet!");
  }
}

const birdy = new Bird();
birdy.sayHello(); // "Tweet tweet!"
