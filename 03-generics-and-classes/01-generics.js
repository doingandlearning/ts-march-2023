"use strict";
// library
function identity(input) {
    return input;
}
const value = identity("abc");
identity(123);
identity({ quote: "Don't eat yellow snow." });
function firstElement(a) {
    return a[0];
}
console.log(firstElement(["a", "b", "c"]));
console.log(firstElement([1, 2, 3]));
console.log(firstElement([1, "two", 3, true]));
let stringyBox = {
    inside: "Hello",
    outside: 10,
};
function getLast(node) {
    return node.next ? getLast(node.next) : node.value;
}
let lastDate = getLast({
    value: new Date(),
    next: {
        value: new Date("2023-03-07"),
        next: { value: new Date("2023-03-06") },
    },
});
let lastFruit = getLast({
    next: {
        value: "banana",
    },
    value: "apple",
});
console.log(lastDate);
