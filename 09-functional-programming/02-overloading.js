"use strict";
// Overloading ...
function add(a, b) {
    return a + b;
}
function addThree(a, b, c) {
    return a + b + c;
}
function addMany(...nums) {
    return nums.reduce((a, c) => a + c, 0);
}
function overload(value) {
    switch (typeof value) {
        case "string":
            return `Hello, my name is ${value}.`;
        case "number":
            return `Hello, I am ${value} years old.`;
        case "boolean":
            return `Hello, I ${value ? "am" : "am not"} single.`;
        default:
            throw new Error("Invalid use of this function.");
    }
}
console.log(overload("Kevin"));
