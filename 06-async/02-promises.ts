import fs from "node:fs";
// What is a Promise?

// Handshake ->
// Something that will give you a response after some time
// IOU
// Passed to an event loop and gets done later

// Promise - pending or settled. AbortController.

//											- resolved or rejected

// Waiter ...
// ... rejected
// ... resolved

function promiseReadFile(
  filename: fs.PathOrFileDescriptor
): Promise<Buffer | null> {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (error, data) => {
      if (error) {
        reject(error);
      }
      resolve(data);
    });
  });
}

// promiseReadFile(__filename).then((data) =>
//   console.log((data as Buffer).toString())
// );

// Promise.all([
//   promiseReadFile(__filename),
//   promiseReadFile(__filename),
//   promiseReadFile("not-a-path"),
// ])
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// Promise.allSettled([
//   promiseReadFile(__filename),
//   promiseReadFile(__filename),
//   promiseReadFile("not-a-path"),
// ]).then((data) => console.log(data));

const ac = new AbortController();

console.log("Starting the fetch!");
fetch("https://api.github.com/users", { signal: ac.signal })
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("The request was aborted.");
      return;
    }
    console.log(error, "Problem with the fetch");
  });

ac.abort();
