function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;
function add(a: number, b: number, c?: number): number {
  if (c !== undefined) {
    return a + b + c;
  }
  return a + b;
}
