import fs from "node:fs";
// callbacks
// error first callbacks

// npm init -y
// npm install @types/node
// tsc --init

fs.readFile(__filename, (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  const [first] = data.toString().split(" ");
  console.log(first);

  fs.readFile("filename", () => {});
});
