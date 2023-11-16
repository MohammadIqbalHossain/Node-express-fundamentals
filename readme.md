# Express and node fundamentals.

Video-1 - What is Node.js?

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to execute JavaScript code server-side, outside of a web browser. This enables developers to use JavaScript to write server-side scripts, allowing for server-side and networking applications to be built with JavaScript.

Node.js is known for its event-driven, non-blocking I/O model, which makes it efficient and well-suited for building scalable and real-time applications. It has a large ecosystem of open-source libraries and packages, making it a popular choice for web development.

In a nutshell, Node.js extends the use of JavaScript from the browser to the server, allowing developers to use a single programming language (JavaScript) for both client-side and server-side development.

Video-2:

What is module?

A module is isolated and reusable block of code that has it's own scope.

We use two type of modular system in js.

Commonjs:
CommonJS is a module system for JavaScript that is used in server-side development with platforms like Node.js. It defines a set of specifications for how modules should be structured and loaded in JavaScript environments. The CommonJS module system allows you to organize your code into separate files and then import and export functionality between them.

esm:
ESM stands for ECMAScript Modules, and it is a standard for organizing and structuring code in JavaScript applications. Unlike CommonJS, which is synchronous and primarily used in Node.js for server-side development, ESM is designed to work in both browsers and server-side environments, providing a more standardized approach to module loading.

Commonjs syntax.

To access another files `require`

```js
const myModule = require("./myModule");
```

To export a file `module.export`

```js
module.export = myModule;
```

extension `.js`

esm syntax:

To access a file:

```js
 import myModule './myModule'
```

To export file.

```js
export default myModule;
```

extension `mjs`

Local modules:

When you're importing same same variable and destructuring them to access you've to use name alias.

```js
const { a, add } = require("./myMoudle");
const { a: a2, add: add2 } = require("./myModule-2"); //using name alias to channge variables name.
```

Build-in modules by node.js:

Node.js comes with several built-in modules that provide essential functionality for various tasks. Some of the core built-in modules include:

1. **`fs` (File System):** Provides methods for interacting with the file system, allowing you to read/write files, create directories, and more.

   ```javascript
   const fs = require("fs");
   ```

2. **`http` and `https`:** These modules allow you to create HTTP and HTTPS servers, handle requests, and send responses.

   ```javascript
   const http = require("http");
   const https = require("https");
   ```

3. **`path`:** Helps in working with file and directory paths, providing methods for resolving, joining, and parsing paths.

   ```javascript
   const path = require("path");
   ```

4. **`events`:** Implements the EventEmitter pattern, allowing you to create and handle custom events.

   ```javascript
   const EventEmitter = require("events");
   ```

5. **`util`:** Provides utility functions, including formatting and inspecting objects.

   ```javascript
   const util = require("util");
   ```

6. **`os`:** Offers information about the operating system, such as CPU architecture, memory, and network interfaces.

   ```javascript
   const os = require("os");
   ```

7. **`querystring`:** Provides methods for working with query strings in URLs.

   ```javascript
   const querystring = require("querystring");
   ```

8. **`crypto`:** Offers cryptographic functionality, including hashing and encryption.

   ```javascript
   const crypto = require("crypto");
   ```

9. **`url`:** Helps in parsing and formatting URLs.

   ```javascript
   const url = require("url");
   ```

These are just a few examples, and Node.js has more built-in modules to cover a wide range of functionalities. You can explore the official Node.js documentation for a comprehensive list and detailed information on each module.

We've seen node.js path module. `path.join()`, `path.parse()`, `path.dirname`

Video-3:

Read and write file using 'fs' file system build-in modulue.

We can read and write file in both way sync and async.

fs.readFile('./filepath', 'data format utf code' (callback error and data parameter) => {
if(err) {
throe your error.
}
...do somethiing with read data

    fs.writeFile('path', 'you data' (callback) => {
        ...show error
        made your file
    }

} )

see ReadAndWriteSync and async file to understand more.

Video-4:

Node.js follows an event-driven architecture, which means it operates based on events and callbacks. Here are the key components and concepts of Node.js' event-driven architecture:

1. **Event Loop:**

   - Node.js runs in a single-threaded, non-blocking event loop. The event loop is responsible for handling events, executing callbacks, and managing asynchronous operations.
   - It constantly listens for events and executes the associated callbacks when events occur.

2. **Event Emitters:**

   - Objects that emit named events. In Node.js, the `EventEmitter` class is a core module that facilitates the implementation of the observer pattern.
   - Any object that extends `EventEmitter` can emit events, and other objects can subscribe to those events.

3. **Callbacks:**

   - Functions that are passed as arguments to be executed when a specific event occurs or an asynchronous operation completes.
   - Callbacks are a fundamental part of Node.js, allowing non-blocking execution of code.

4. **Non-blocking I/O:**

   - Node.js uses non-blocking, asynchronous I/O operations. When an I/O operation is initiated, Node.js doesn't wait for it to complete before moving on to the next task. Instead, it registers a callback, and the event loop continues processing other events.
   - This allows Node.js to handle a large number of concurrent connections efficiently.

5. **Event-driven Paradigm:**

   - Node.js applications are built around the idea of responding to events. Events can be triggered by various sources, such as user actions, network requests, or file system changes.
   - Developers write event handlers (callbacks) to respond to specific events.

6. **Example:**

   - Here's a simplified example to illustrate the event-driven nature:

     ```javascript
     const EventEmitter = require("events");
     const myEmitter = new EventEmitter();

     // Event subscription
     myEmitter.on("myEvent", (data) => {
       console.log("Event occurred with data:", data);
     });

     // Event emission
     myEmitter.emit("myEvent", {
       message: "Hello, event-driven architecture!",
     });
     ```

   - In this example, the event `'myEvent'` is emitted, and any registered callback will be executed when the event occurs.

The event-driven architecture of Node.js enables scalable and efficient handling of concurrent connections and asynchronous operations. It's well-suited for building high-performance, real-time applications, such as web servers, chat applications, and streaming services.

Video-05: Streaminga and buffering.

In Node.js, streaming and buffering are two concepts related to handling data, especially when dealing with input/output operations. Let's break down each concept:

1. **Streaming:**

   - Streaming is a method of processing data piece by piece, or chunk by chunk, as it becomes available, rather than loading the entire dataset into memory before processing.
   - In Node.js, streams are instances of the EventEmitter class and can be readable, writable, or both.
   - There are several types of streams, such as Readable, Writable, Duplex, and Transform, each serving a specific purpose in the data flow.

   **Example - Reading from a Stream:**

   ```javascript
   const fs = require("fs");

   const readableStream = fs.createReadStream("example.txt");

   readableStream.on("data", (chunk) => {
     console.log(`Received chunk: ${chunk}`);
   });

   readableStream.on("end", () => {
     console.log("End of stream.");
   });
   ```

   In this example, the file 'example.txt' is read in chunks, and the `'data'` event is emitted for each chunk.

2. **Buffering:**

   - Buffering involves temporarily storing data in memory before it is consumed or processed.
   - In Node.js, buffers are used to represent binary data, and they can be created from strings, arrays, or other buffer instances.
   - Buffering can occur in various situations, such as when reading data from a file or receiving data over the network.

   **Example - Creating a Buffer:**

   ```javascript
   const buffer = Buffer.from("Hello, Buffer!", "utf-8");
   console.log(buffer.toString());
   ```

   Here, a buffer is created from the string 'Hello, Buffer!' with the specified encoding ('utf-8').

In summary, streaming allows you to process data in chunks, which is particularly useful for large datasets or continuous streams of data. Buffering, on the other hand, involves temporarily storing data in memory, which can be helpful in scenarios where you need to manipulate or process the entire dataset at once. Node.js provides a flexible and efficient way to work with both streaming and buffering, depending on the requirements of your application.

Vido-6: Handling error on steaming and buffer.

Handling any error with an extra listener:

```js
readFromFile.on("error", (error) => {
  res.end(`Something went wrong. ERROR:${error.message}`);
});
```

Installing express and typescript.

make a project file to work on express.js framework. and install express and install typescript as dev dependencies.

Conver commonjs module system to mjs module system.
make a two different file for listening to port and app file as root file for the backend project.

Video-7: What is parser? request and response object.

Here we're using TS. But Ts code can't be run by node. we've to compile code into js. to do so run `tsc` command.
but when we're chnaging a file We need to use the command again and again. To revent this or make it automatic we've to run the command `tsc-w`. Now, compilation became automatic.

Another problem occured is that, wehen we're changing file we're running server again and again it's a boring task. to make it automactic instal `nodemon` as dev dependencies. write script in `package.json` file to run a file automatically.

```json
 "scripts": {
    "start:dev": "nodemon ./dist/app/server.js", //runing server file.
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

Now, come to the request and response in the code, Specify a type for req, res.

```js
app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});
```

Request and response types are coming from express, they defined it as request and response.

```js
import express, { Request, Response } from "express";
```

Now, Install postman to check GET method and POST method are working well.

Finally it's talks about parser. what are parser, these are express modules that request body data into text, json or any other format.

```js
//Using parsers.
app.use(express.json());
app.use(express.text());
```

Video-07:

Params and query.

In Express, you can access parameters (`params`) and query parameters (`query`) from the request object (`req`) in your route handlers. Here's a brief overview of how to use them:

### Parameters (`req.params`):

Parameters are part of the URL path and are typically used to capture values dynamically. For example, in the route pattern `/users/:id`, `:id` is a parameter, and you can access it using `req.params.id`.

```javascript
const express = require("express");
const app = express();
const port = 3000;

// Example route with a parameter
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

When you visit `/users/123`, `req.params.id` will be `'123'`.

### Query Parameters (`req.query`):

Query parameters are part of the URL after the `?` character and are typically used for optional parameters or filtering. For example, in the URL `/search?query=node&category=programming`, you can access `query` and `category` using `req.query.query` and `req.query.category`.

```javascript
const express = require("express");
const app = express();
const port = 3000;

// Example route with query parameters
app.get("/search", (req, res) => {
  const query = req.query.query;
  const category = req.query.category;
  res.send(`Search Query: ${query}, Category: ${category}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

When you visit `/search?query=node&category=programming`, `req.query.query` will be `'node'` and `req.query.category` will be `'programming'`.

### Combining Parameters and Query Parameters:

You can use both parameters and query parameters in the same route.

```javascript
const express = require("express");
const app = express();
const port = 3000;

// Example route with both parameters and query parameters
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const isAdmin = req.query.admin === "true";
  res.send(`User ID: ${userId}, isAdmin: ${isAdmin}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

When you visit `/users/123?admin=true`, `req.params.id` will be `'123'` and `req.query.admin` will be `'true'`.

video-8: middleware.

In Express, you can access parameters (`params`) and query parameters (`query`) from the request object (`req`) in your route handlers. Here's a brief overview of how to use them:

### Parameters (`req.params`):

Parameters are part of the URL path and are typically used to capture values dynamically. For example, in the route pattern `/users/:id`, `:id` is a parameter, and you can access it using `req.params.id`.

```javascript
const express = require("express");
const app = express();
const port = 3000;

// Example route with a parameter
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

When you visit `/users/123`, `req.params.id` will be `'123'`.

### Query Parameters (`req.query`):

Query parameters are part of the URL after the `?` character and are typically used for optional parameters or filtering. For example, in the URL `/search?query=node&category=programming`, you can access `query` and `category` using `req.query.query` and `req.query.category`.

```javascript
const express = require("express");
const app = express();
const port = 3000;

// Example route with query parameters
app.get("/search", (req, res) => {
  const query = req.query.query;
  const category = req.query.category;
  res.send(`Search Query: ${query}, Category: ${category}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

When you visit `/search?query=node&category=programming`, `req.query.query` will be `'node'` and `req.query.category` will be `'programming'`.

### Combining Parameters and Query Parameters:

You can use both parameters and query parameters in the same route.

```javascript
const express = require("express");
const app = express();
const port = 3000;

// Example route with both parameters and query parameters
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const isAdmin = req.query.admin === "true";
  res.send(`User ID: ${userId}, isAdmin: ${isAdmin}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

When you visit `/users/123?admin=true`, `req.params.id` will be `'123'` and `req.query.admin` will be `'true'`.

Video-9: Routing in express.js

In Express.js, a router is a middleware that allows you to group route handlers for a particular part of your site together, and it can be thought of as a mini-application within your main application. Routers provide a way to modularize and organize your route-handling code.

Here's a brief overview:

1. **Creating a Router:**
   You can create a router using `express.Router()`:

   ```javascript
   const express = require("express");
   const router = express.Router();
   ```

2. **Defining Routes:**
   You can define routes on the router object, similar to how you define routes on the main Express application:

   ```javascript
   router.get("/", (req, res) => {
     res.send("This is the home page");
   });

   router.get("/about", (req, res) => {
     res.send("About us");
   });
   ```

3. **Using the Router in the Main Application:**
   Once you've defined routes on your router, you can use the router as middleware in your main Express application:

   ```javascript
   const express = require("express");
   const app = express();

   // Using the router
   app.use("/myRoute", router);

   // Other middleware and route handlers
   ```

   This means that any routes defined on the router will be relative to the path you specify when you use the router.

4. **Modularization:**
   Routers are especially useful for modularizing your code. You can create separate routers for different parts of your application (e.g., user routes, product routes) and then use them in your main application.

   ```javascript
   const userRouter = require("./routes/user");
   const productRouter = require("./routes/product");

   app.use("/users", userRouter);
   app.use("/products", productRouter);
   ```

This makes your code more organized and easier to maintain, as different parts of your application logic are encapsulated in separate router modules.

Video-10: Error handling.

1.Use try catch:

```js
//API and handling errors.
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(something);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something went wrong",
    });
  }
});
```

2. Handling errors with global error handler:

When your main api take a next function as parameter. call it in catch block give it's parameter the error.

```js
//API and handling errors.
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(something);
  } catch (error) {
    next(error);
  }
});
```

```js
//Global eror handler.
app.use("/", (error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
});
```

3. Handling all unexpected routes.

```js
//Handling all unexpected routes.
app.all("*", (req: Request, res: Response) => {
  res.status(200).json({
    success: false,
    message: "Route not found",
  });
});
```
