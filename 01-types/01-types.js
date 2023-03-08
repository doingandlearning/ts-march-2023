// What is a type?
// Data type
// Primitive values
// number, boolean, null, undefined, symbol, string, bigint
// Type: object
{
    let name = "Kevin";
    console.log(name.length);
    const length = 10;
    let isOn = true;
    let no = undefined;
    let symbol = Symbol();
    let bigNumber = 423423n;
}
{
    let name = "Bhavani";
    name = "Richard";
    name = "Neil";
    name = 7337;
    // implicit any
    let age;
    age = 8;
    let city = "Glasgow";
    city = "London";
    city = 10;
}
// Functions
{
    const firstSum = add(12, 6);
    console.log(firstSum);
    function add(number1, number2) {
        return number1 + number2;
    }
    const multiple = function (a, b) {
        return a * b;
    };
    multiple(3, 4);
    const divide = (a, b) => a / b;
    const divideMultiLine = (a, b) => {
        // do other work in here
        return a / b;
    };
    divide(5, 2);
}
{
    let ScreenSize;
    (function (ScreenSize) {
        ScreenSize[ScreenSize["Small"] = 0] = "Small";
        ScreenSize[ScreenSize["Medium"] = 1] = "Medium";
        ScreenSize[ScreenSize["Large"] = 2] = "Large";
        ScreenSize[ScreenSize["XLarge"] = 3] = "XLarge";
    })(ScreenSize || (ScreenSize = {}));
}
