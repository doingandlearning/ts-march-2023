function createPerson(name: string, age: number): { name: string; age: number };
function createPerson(name: string): { name: string };
function createPerson(
  name: string,
  age?: number
): { name: string; age?: number } {
  if (age !== undefined) {
    return { name, age };
  }
  return { name };
}
