import { School } from "../../../03-generics-and-classes/02-classes";

class HighSchool extends School {
  public getStudentTypes(): string[] {
    return ["Freshman", "Sophomore", "Junior", "Senior"];
  }
}

const highSchool = new HighSchool("North High School");
console.log(highSchool.getStudentTypes()); // ["Freshman", "Sophomore", "Junior", "Senior"]
