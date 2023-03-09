// 1. Default parameters

const defaultLength = 10;

function areaOfRectangle(
  length: number = defaultLength,
  width: number = length
) {
  return length * width;
}

areaOfRectangle(10, 10);
areaOfRectangle(10); // 100
areaOfRectangle();

class Horse {
  constructor(public name: string = "Ed") {}
}

// 2. Template literals
{
  const firstName = "Zak";
  const lastName = "Aden";
  var name = "Your name is " + firstName + " " + lastName + ".";
  const name2 = `Your name is ${firstName} ${lastName}.`;
}
console.log(name);
export default {};

// 3. Object literals

function getLaptop(make: string, model: string, year: number) {
  return {
    make,
    model,
    year,
  };
}

// 4. var vs let/const

// let and const block scoped
function letFunction() {
  console.log("Before defining block", scopedLet);
  if (true) {
    let scopedLet = "I am scoped within a block";
  }
  console.log("After defining block", scopedLet);
}

function simulateDom() {
  var pseudoDom = {
    button1: {},
    button2: {},
    button3: {},
  };
  for (let i = 1; i <= 3; i++) {
    // 1
    var element = pseudoDom["button" + i];
    element.click = function () {
      return "Item " + i + " is clicked."; // 2
    };
  }
  // i = 4
  console.log(pseudoDom.button1.click());
  console.log(pseudoDom.button2.click());
  console.log(pseudoDom.button3.click()); // 3
  return pseudoDom;
}
// Item 4 is clicked. * 3
// 3 reference errors
// "Item" + 3 + " is clicked" * 3

// Temporal Dead Zone

{
  console.log(number);

  let number = 10;
}

// 5. [] {}

// console.log([] === []) // false
{
  const arrNames = ["Vicky", "Louise", "Rich", "Neil"];
  const newNames = [...arrNames]; // Array.from(arrNames)

  newNames.push("Zak");

  newNames === arrNames; // ?? False
}
{
  const arrNames = [
    { name: "Vicky" },
    { name: "Louise" },
    { name: "Rich" },
    { name: "Neil" },
  ];

  // const newNames = [...arrNames]; // Array.from(arrNames)
  // const newNames = JSON.parse(JSON.stringify(arrNames));
  const newNames = structuredClone(arrNames);

  newNames.push({ name: "Zak" });

  newNames === arrNames; // ?? False
  newNames[0] === arrNames[0];
}
