# 🐢 Node.js

## 🌟 The different core modules

### Child process

The child process module will allow us to create and manage new Node.js processes. Whether it is to simply execute commands on the system or take advantage of having several virtual CPUs and exploit the resources of your machine in a more optimal way (for example to manage ancillary tasks). As such, [Worker threads](https://nodejs.org/api/worker_threads.html) can also be used.


```js
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

const { stdout } await execAsync("ls");
console.log(stdout);
```

If you are looking for a module that simplifies these tasks, I recommend you take a look at [execa](https://github.com/sindresorhus/execa#readme). (there is also [cross-spawn](https://github.com/moxystudio/node-cross-spawn)).


> ⛔ Be careful not to execute commands from character strings coming from outside without performing strict verification (an attacker could use it to execute code on your system).

---

⬅️ [🌟 The different core modules: OS](./7-os.md) |
➡️ [🌟 The different core modules: Utilities](./9-utilities.md)
