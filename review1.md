# Review Exercise 1  
about 40 mins (then show-and-tell)
---

This is a chance to work with TypeScript/ECMAScript in a mini project
Tackle this however you like, the point is for you to explore using the tools
You will load up some data into a type-safe structure, then (optionaly) sort the data and show slices of it
You could manually transpile your .ts to js with tsc, or run directly with ts-node
You could make programatic choices (run in node) or ask the user in a web page (in a browser).
The JSON data is in the gist here: (copy a fragment of this data)
  https://gist.github.com/doingandlearning/40ceb809aebc0c22f932b93a9644ca4e

## Details
-------
- In a new folder, create a .ts file for your code
- Iniutialise your project with `tsc --init`
- Get a copy of (some of) the 'todos' array and make sure it is scoped to your code
- Write an interface to match the types of a 'todo' member
- Use your interface to make the 'todos' array type-safe
- Create some type-safe instances which are derived from individual 'todo' members
	```ts
  let todo1:Todo = ...
  ```

NB you may need to make use of a tsconfig.json file

Optional
--------
- Next you will use the built-in JavaScript array 'sort' and 'filter' methods
- Choose a data field to sort the entire 'todos' data set (e.g. by 'userId' or 'completed')
- Decide on a strategy to show todos for one user, then just the un-completed jobs for a user

- Consider how you could enforce the 'completed' state to be one of:
  true, false, archived, pending, deleted 

```ts

type completedState = boolean | "archived" | "pending" | "deleted"

```