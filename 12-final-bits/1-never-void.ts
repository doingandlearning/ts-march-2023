// void

function log(): void {
  console.log("Hello!");
}

log();

// never

function doesSomething() {
  return true;

  function doesSomethinElse(): never {}
}

// processes that will never end!

function getGoing(): never {
  while (true) {
    console.log("I'm working over here");
    // listen for new connections
    // keep a connection alive
  }
}

// void
// never
// unknown
// undefined

function stringifyForLogging(value: unknown): string {
  if (typeof value === "function") {
    // Within this branch, `value` has type `Function`,
    // so we can access the function's `name` property
    const functionName = value.name || "(anonymous)";
    return `[function ${functionName}]`;
  }

  if (value instanceof Date) {
    // Within this branch, `value` has type `Date`,
    // so we can call the `toISOString` method
    return value.toISOString();
  }

  return String(value);
}
