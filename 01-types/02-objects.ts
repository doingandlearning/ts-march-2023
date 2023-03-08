// type User = {
//   name?: string;
//   location: string;
// };

// Sounds
interface User {
  id: number | string;
  lastLoggedIn: string;
}

// Login
interface User {
  name?: string;
  location: string;
  id: number | string;
}

// const user: User = {
//   location: "London",
// };

// user.location = "Glasgow";

{
  type BirdType = {
    wings: 2;
  };

  interface BirdInterface {
    wings: 2;
  }

  const bird1: BirdType = { wings: 2 };
  const bird2: BirdInterface = { wings: 2 };
  // Structural ...
  const bird3: BirdInterface = bird1;

  type Owl = { nocturnal: true } & BirdType;
  type Robin = { nocturnal: false } & BirdType;

  interface Peacock extends BirdType {
    colourful: true;
    flies: true;
  }

  interface Chicken extends BirdInterface {
    colourful: false;
    flies: false;
  }

  let owl: Owl = { wings: 2, nocturnal: true };
  let chicken: Chicken = { wings: 2, colourful: false, flies: false };

  owl = chicken;
  chicken = owl;
}

{
  interface Character {
    name: string;
    height: string;
    mass: string;
  }

  interface APIResponse {
    results: Character[];
    count: number;
  }
  // Duck typing ...

  const response: APIResponse = {
    count: 82,
    results: [
      {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
      },
    ],
  };
}
