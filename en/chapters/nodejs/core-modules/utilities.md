# 🐢 Node.js

## 🌟 The different core modules

### Utilities

The util module contains various small utility functions. We use it most often to retrieve promisify which allows us to convert a callback to Promise.

```js
import { promisify } from "util";
import stream from "stream";
import fs from "fs";

const pipeline = promisify(stream.pipeline);

await pipeline(
    fs.createReadStream("./in.txt"),
    fs.createWriteStream("./out.txt"),
);
```

There is also a function to switch from a Promise to a callback ([callbackify](https://nodejs.org/api/util.html#util_util_callbackify_original)). However, I never used it.

The [deprecate()](https://nodejs.org/api/util.html#util_util_deprecate_fn_msg_code) function can be useful if, for example, you want to deprecate a method of a package or a project. This allows developers to be notified in advance of an upcoming major SemVer update that will remove said functionality.

The [inspect()](https://nodejs.org/api/util.html#util_util_inspect_object_showhidden_depth_colors) method can be useful if you need to log objects in a specific way (with different levels of depth etc). This is the method used under the hood when using console methods.

```js
import { inspect} from "util";

const log = (str) => console.log(inspect(str, { compact: false, colors: true }));
log({ data: "..." });
```

---

⬅️ [🌟 The different core modules: Child process](./child_process.md) |
➡️ [🌟 The different core modules: VM](./vm.md)
