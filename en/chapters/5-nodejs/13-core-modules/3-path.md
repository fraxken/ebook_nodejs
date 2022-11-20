# 🐢 Node.js

## 🌟 The different core modules

### Path

The path module provides utilities for working with file and directory paths.

It will mostly be used for path composition (***if you do them yourself your code is probably not cross-platform***).

```js
const path = require("path");

// ⛔️ BAD
const bad = __dirname + "/" + "path";

// ✅ GOOD
const good = path.join(__dirname, "path");
```

The paths are not built in the same way depending on the operating system that will be used (UNIX, Windows, MAC etc). If you are interested in cross-platform code writing best practices, I recommend [Awesome Node.js cross platform](https://github.com/bcoe/awesome-cross-platform-nodejs).

The path module also has a set of methods that will allow you to retrieve the different parts that make up the path of a file or folder. Like for example the extension of a file (that all juniors have fun recovering with a RegExp or with hacks .split etc).

```js
const path = require("path");

console.log(path.extname("boo.js")); // .js
```

---

⬅️ [🌟 The different core modules: Events](./2-events.md) |
➡️ [🌟 The different core modules: FileSystem](./4-fs.md)