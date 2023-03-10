# Review Exercise 3 until 3:00
---
Build an app where the user can access data from the Star Wars API at
    https://swapi.dev/api/
 
The API allows several categories of search such as people, planets, species or starships
(or continue with users API from before)

Pass in the category and an IDs
  e.g. https://swapi.dev/api/people/1 (use back tick syntax)

Show results nicely - React, web page or a Node terminal output.

Notes:
- can we use an enum for the category field (or retreive from API)
- handle out-of-bounds parameters (e.g. no such category)
- aim for modular composition
- handle server problems (SWAPI vehicles fail for some IDs)

Optional
--------
- You could write a generator to yield the next (sequential) item from the server
- Your types/interfaces could be in separate modules
- Each category item returns a list of film URLs - fetch those too