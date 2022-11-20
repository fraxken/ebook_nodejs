# 🐢 Node.js

## 🌟 The different core modules

### Readline

The [readline](https://nodejs.org/api/readline.html#readline_readline) module will allow you to consume “Readable” type Streams line by line. For example if you want to read a file line by line:

```js
import readline from "readline";
import fs from "fs";

async function* readFileByLine(filename) {
    const rl = readline.createInterface({
        input: fs.createReadStream(filename), crlfDelay: Infinity,
    });

    for await (const line of rl) {
        yield line;
    }
}

for await (const line of readFileByLine("./input.txt")) {
    console.log(line);
}
```

Because process.stdin is a Stream Readable it is also possible to create CLIs (or simply prompts).

```js
import readline from "readline";

function prompt(query) {
    const rl = readline.createInterface({
        input: process.stdin, output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(query, (response) => {
            rl.close();
            resolve(reponse);
        });
    });
}
```

---

⬅️ [🌟 The different core modules: Zlib](./12-zlib.md) |
➡️ [🌟 The different core modules: perf_hooks](./14-perf_hooks.md)
