// library

function identity<InputType>(input: InputType) {
  return input;
}

const value = identity("abc");
identity(123);
identity({ quote: "Don't eat yellow snow." });

function firstElement<ArrayType>(a: ArrayType[]): ArrayType {
  return a[0];
}

console.log(firstElement<string>(["a", "b", "c"]));
console.log(firstElement([1, 2, 3]));
console.log(firstElement([1, "two", 3, true]));

export interface Box<InsideType, OutsideType> {
  inside: InsideType;
  outside: OutsideType;
}

let stringyBox: Box<string, number> = {
  inside: "Hello",
  outside: 10,
};

export interface LinkedNode<Value> {
  next?: LinkedNode<Value>;
  value: Value;
}

function getLast<Value>(node: LinkedNode<Value>): Value {
  return node.next ? getLast(node.next) : node.value;
}

let lastDate = getLast({
  value: new Date(),
  next: {
    value: new Date("2023-03-07"),
    next: { value: new Date("2023-03-06") },
  },
});

type Fruit = "banana" | "apple" | "blackcurrant";

let lastFruit = getLast({
  next: {
    value: "banana",
  },
  value: "apple",
});

console.log(lastDate);
