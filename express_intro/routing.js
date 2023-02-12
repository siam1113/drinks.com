/*

@ Routing, refers to determining how an application responds to a client request to a particular endpoint (which is an URI (or path) with a specific HTTP request method (GET, POST, and so on))
Each route can have one or more handler functions, which are executed when the route is matched.
>> app.METHOD(PATH, HANDLER)
  app is an instance of express.
  METHOD is an HTTP request method, in lowercase.
  PATH is a path on the server.
  HANDLER is the function executed when the route is matched.

You define routing using methods of the Express app object that correspond to HTTP methods; for example, app.get() to handle GET requests and app.post to handle POST requests. For a full list, see app.METHOD.

*/
