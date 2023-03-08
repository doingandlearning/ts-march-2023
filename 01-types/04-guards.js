{
  function padLeft(padding, input) {
    // Guard statement
    if (typeof padding === "number") {
      return " ".repeat(padding) + input;
    } else if (typeof padding === "string") {
      return padding + input;
    } else if ("name" in padding) {
      return `${padding.name} is a nice person.`;
    } else if (typeof padding === "object" && padding.id) {
      return `${padding.id} is a nice person.`;
    }
  }
  console.log(padLeft("£", "100"));
  console.log(padLeft(10, "Current PM"));
}
