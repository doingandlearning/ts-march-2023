"use strict";
// Prototypal -> prototypical inheritance
class Dog {
    name;
    location;
    vet;
    adoptionDate;
    constructor(name, // private, protected
    location, vet, adoptionDate) {
        this.name = name;
        this.location = location;
        this.vet = vet;
        this.adoptionDate = adoptionDate;
    }
    bark() {
        console.log("Woof!");
    }
    sayHello() {
        this.bark();
    }
}
const rex = new Dog("Rex", "Leeds", "Bob", new Date("2020-03-01"));
rex.bark();
rex.name;
rex.location;
console.log(rex);
class Greeter {
    location;
    accent;
    date;
    greet(name) {
        return `Hello ${name}`;
    }
    constructor(location, accent, date) {
        this.location = location;
        this.accent = accent;
        this.date = date;
    }
}
const myGreeter = new Greeter("Downpatrick", "Northern Irish", new Date());
class School {
    name;
    static locator() {
        console.log("I'm right here!");
    }
    constructor(name) {
        this.name = name;
    }
}
class PreSchool extends School {
    getStudentTypes() {
        return ["preschooler"];
    }
}
let school = new PreSchool("Shiny Happy People Holding Hands");
console.log(school.getStudentTypes());
console.log(PreSchool.locator());
