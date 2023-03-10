// we need the RxJS library
import { fromEvent, filter } from "rxjs";
import { debounceTime, map, tap } from "rxjs/operators";

// where possible, let Typescript infer the type
const testData: string[] = [
  "people",
  "planets",
  "species",
  "vehicles",
  "starships",
];
const searchBox = document.querySelector("#search") as HTMLInputElement; // -> 'input'
const results = document.querySelector("#results") as HTMLElement; // -> 'ul'
// e.g. 'hello' is boolean true !'hello' is bolean false
const notEmpty = (input: string) => input && input.trim().length > 0;
// make a request
const sendRequest = (arr: string[], query: string) => {
  return arr.filter((item) => {
    return query.length > 0 && item.startsWith(query);
  });
};
const appendResults = (container: HTMLElement, results: string[]) => {
  for (const result of results) {
    const li = document.createElement("li");
    const text = document.createTextNode(result);
    li.appendChild(text);
    container.appendChild(li);
  }
};
const cleanUpUtil = (container: HTMLElement) => {
  while (container.childElementCount > 0) {
    container.removeChild(container.firstChild as HTMLElement);
  }
};

// we need an observable - here we convert the key event to an observable
const keyStream$ = fromEvent(searchBox, "keyup");

keyStream$
  .pipe(
    debounceTime(500),
    map((event) => {
      const input = event.target as HTMLInputElement;
      return input.value;
    }),
    // filter((value) => value === ""),
    tap((item) => console.log(`Querying for ${item}`)),
    map((query) => {
      return sendRequest(testData, query);
    })
  )
  .subscribe((result) => {
    cleanUpUtil(results);
    appendResults(results, result);
  });
