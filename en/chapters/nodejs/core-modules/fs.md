# 🐢 Node.js

## 🌟 The different core modules

### FileSystem

As its name suggests, this module allows you to interact with the file system. If you need to read, modify a file, then what you need is very clearly in this module (and the same goes for folders).

Bonus: [Article about FS module for beginners](https://catalins.tech/a-beginners-guide-to-the-file-system-module-in-nodejs).

For a junior this module is a good opportunity to train on the mastery of Asynchronous (Promise, Callback) without the need to deploy large means (you can simulate various and varied scenarios on your OS).

For example, going to retrieve the size of a directory, the extensions of all the files in the directory, etc. And optimally asynchronously, avoiding series as much as possible (using methods like [Promise.all](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/all) and [Promise.allSettled](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/allSettled)) .

```js
import fs from "fs/promises";
import path from "path";

const [location = process.cwd()] = process.argv.slice(2);

const dirents = await fs.readdir(location, { withFileTypes: true });

const toWait = [];
for (const dirent of dirents) {
    if (dirent.isFile()) {
        toWait.push(fs.stat(path.join(location, dirent.name)));
    }
}
```

Operations on FS are handled behind the scenes by Libuv and distributed over [Threads](http://docs.libuv.org/en/v1.x/threadpool.html).

---

⬅️ [🌟 The different core modules: Path](./path.md) |
➡️ [🌟 The different core modules: Timers](./timers.md)