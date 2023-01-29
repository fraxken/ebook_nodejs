# 🐢 Node.js

## 🌟 Les différents modules core

### Events

Le module [Events](https://nodejs.org/api/events.html) va permettre de créer et manipuler un des éléments les plus importants de Node.js: l’Event Emitter (il y a aussi depuis peu Event Target qui est une API compatible avec le navigateur).

Les différents modules de Node.js comme HTTP, Net, Child process ainsi que les Streams sont majoritairement construits à l’aide d’Event Emitter. 

```js
const fs = require("fs");

const stream = fs.createReadStream("./myFile.txt");
stream.on("data", (chunk) => console.log(chunk));
stream.on("end", () => console.log("stream finished!"));
stream.on("error", console.error);
```

Exemple ci-dessus avec un Read Stream ou nous exploitons les évènements “data”, “end” ou encore “error” (**<u>merci de pas reproduire ce code en production ^^</u>**).

Ce sont des structures complètement **Synchrone** dans lesquelles nous pouvons lier un nom d’évènement (emitter) à une ou plusieurs functions (listeners). Les évènements qui seront émis sont gérés en FIFO (First in First out).

Cela va nous permettre de mettre en place diverses patterns ou le code fonctionnera  par le biais de communication entre différents objets.


```js
import { EventEmitter, once } from "events";

const ee = new EventEmitter();
setImmediate(() => ee.emit("foo", "hello world!"));

const [message] = await once(ee, "foo");
console.log(message);
```

Une class en JavaScript peut s'étendre d’un EventEmitter.

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

C’est pratique si vous voulez construire un système modulaire ou différent objets (class) communiquent par le biais de messages (les Addons dans SlimIO utilisent beaucoup ce principe).

Il est aussi bon de noter que depuis quelques versions la méthode “on” d'events est AsyncIterable. 

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

⬅️ [🌟 Les différents modules core: Console](./1-console.md) |
➡️ [🌟 Les différents modules core: Path](./3-path.md)
