import { LinkedNode } from "../../../03-generics-and-classes/01-generics";
import { Pet } from "../../../03-generics-and-classes/02-classes";

class AnimalShelter<Pet> {
  private head: LinkedNode<Pet> | undefined;

  public addPet(pet: Pet): void {
    const node: LinkedNode<Pet> = { value: pet, next: this.head };
    this.head = node;
  }
}

const animalShelter = new AnimalShelter<Pet>();
animalShelter.addPet({ vet: "Bob", adoptionDate: new Date("2020-01-01") });
