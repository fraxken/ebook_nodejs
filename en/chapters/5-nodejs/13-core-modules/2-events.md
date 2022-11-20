# 🐢 Node.js

## 🌟 The different core modules

### Events

The [Events](https://nodejs.org/api/events.html) module will allow you to create and manipulate one of the most important elements of Node.js: the Event Emitter (there is also recently Event Target which is a browser-compatible API).

The various Node.js modules such as HTTP, Net, Child process as well as Streams are mainly built using Event Emitter.

```js
const fs = require("fs");

const stream = fs.createReadStream("./myFile.txt");
stream.on("data", (chunk) => console.log(chunk));
stream.on("end", () => console.log("stream finished!"));
stream.on("error", console.error);
```

Example above with a Read Stream where we use the “data”, “end” or even “error” events (***please do not reproduce this code in production ^^***).

These are completely ***synchronous*** structures in which we can bind an event name (emitter) to one or more functions (listeners). The events that will be sent are managed in FIFO (First in First out).

This will allow us to set up various patterns where the code will work through communication between different objects.

```js
import { EventEmitter, once } from "events";

const ee = new EventEmitter();
setImmediate(() => ee.emit("foo", "hello world!"));

const [message] = await once(ee, "foo");
console.log(message);
```

A class in JavaScript can extend from an EventEmitter.

```js
import { EventEmitter } from "events";

class User extends EventEmitter {
    sayHello() {
        this.emit("hello");
    }
}
const bob = new User();
bob.on("hello", () => console.log("bob say hello!"));
bob.sayHello();
```

This is useful if you want to build a modular system where different objects (class) communicate through messages (Addons in SlimIO use this principle a lot).

It's also worth noting that since some releases the “on” method of events is AsyncIterable.

```js
import { EventEmitter, on } from "events";

const ee = new EventEmitter();
setImmediate(() => {
    ee.emit("data", "foo");
    ee.emit("data", "bar");
});

for await (const [data] of on(ee, "data")) {
    console.log(data);
}
```

---

⬅️ [🌟 The different core modules: Console](./1_console.md) |
➡️ [🌟 The different core modules: Path](./3-path.md)