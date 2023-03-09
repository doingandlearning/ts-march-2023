// Redux ... Generator (async .. )
// High cost calculations
// Lazy evaluation

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next() {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
  return rangeIterator;
}

function* rangeGenerator(
  start: number = 0,
  end: number = Infinity,
  step: number = 1
) {
  let nextIndex = start;

  while (nextIndex < end) {
    yield nextIndex; // STOP!!
    nextIndex += step;
  }
}

function* twoWayGenerator() {
  const what = yield null; //
  while (true) {
    yield "Hello " + what;
  }
}
const twoWay = twoWayGenerator();
twoWay.next();
console.log(twoWay.next("world"));

function* generatorFunction() {
  // any logic
  yield "🍑";
  // any logic
  yield "🍉";
  yield "🍋";
  yield "🥭";
}

const fruitGenerator = generatorFunction();
const otherFruitGenerator = generatorFunction();

for (let fruit of fruitGenerator) {
  console.log(fruit);
}

for (let fruit of fruitGenerator) {
  console.log(fruit);
}

function closureFunction() {
  let counter = 0;
  const fruits = ["🍑", "🍉", "🍋", "🥭"];
  return () => {
    // Lazy => at this point reach out to an api, do some calculation
    return fruits[counter++];
  };
}

const closedFruit = closureFunction();

function* fibon(): Generator<string> {
  let first = 1;
  let second = 1;
  while (true) {
    let sum = second + first;
    yield `The next value is ${sum}`;
    first = second;
    second = sum;
  }
}

// 1, 1, 2, 3, 5, 8
