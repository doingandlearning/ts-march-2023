# Review Exercise 2 
=================
one and a quarter hours 

Interpret however you like - individual or teamwork, show-and-tell after

Build an app to retrieve user data from the API at
https://jsonplaceholder.typicode.com/users

- You will need an interface for 'Users' but only include a few members

- Optionally combine users with their todos and/or photos etc.
The available nested routes are:
    /posts/1/comments
    /albums/1/photos 
    /users/1/albums
    /users/1/todos
    /users/1/posts

- Ideally, build the URL using back-tick interpolation

- Show a nice collection of the users, and optionally their photos or their 'completed' todos
	- e.g. on the web page (preferred)
	- or use console.log and string interpolation within VS Code 
   
- Handle exceptions (catch)
- type-safe the Promise
- use async/await

- If you like, download the JSON and do it all offline (no fetch)

As of Node 18, fetch is now in Node core so you don't need to add a 3rd party dependency like node-fetch.

Details:
========

- It would be helpful to install Live Server which can be found in the [VS Code marketplace](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

- Then right click on the index.html file in the review2 directory and launch with live server. This will open a new browser window which will refresh as the JS code changes.

- In the review 2 directory, run `tsc --watch` which will monitor your src directory for any changes.

- As you save and changes your TS, the JS will compile and the Live Server will refresh the page.

Optional
========
Provide a way to parameterize which user to retrieve (i.e. ask in the web page)
How could you offer a filter (say photos by user or todos by complete)...

NB the API also permits fake delete, post and (real) filter - see the API documentation

consider making interfaces for Address etc. then compose the 'User' interface