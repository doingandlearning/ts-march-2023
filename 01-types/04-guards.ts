{
  interface Person {
    name: string;
  }

  interface User {
    id: number;
  }

  function isPerson(input: Person | User | string): input is Person {
    return (input as Person).name !== undefined;
  }

  function padLeft(padding: number | string | Person | User, input: string) {
    // Guard statement
    if (typeof padding === "number") {
      return " ".repeat(padding) + input;
    } else if (isPerson(padding)) {
      return `${padding.name} is a nice person.`;
    } else if (typeof padding === "object" && (padding as User).id) {
      return `${(padding as User).id} is a nice person.`;
    }
    return padding + input;
  }

  console.log(padLeft("£", "100"));

  console.log(padLeft(10, "Current PM"));
}

{
  interface Fish {
    swim: true;
  }

  interface Bird {
    fly: true;
  }
  function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
  }

  const bird = isFish({ fly: true });
  const fish = isFish({ swim: true });
}
