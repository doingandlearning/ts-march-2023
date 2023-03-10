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
