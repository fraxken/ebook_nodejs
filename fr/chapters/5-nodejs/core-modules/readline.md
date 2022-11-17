# 🐢 Node.js

## 🌟 Les différents modules core

### Readline

Le module readline va permettre de consommer des Streams du type “Readable” ligne par ligne. Par exemple si vous souhaitez lire un fichier ligne par ligne :

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
Parce que process.stdin est un Stream Readable il est aussi possible de créer des CLI (ou tout simplement des prompts).

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

⬅️ [🌟 Les différents modules core: Zlib](./zlib.md) |
➡️ [🌟 Les différents modules core: perf_hooks](./perf_hooks.md)
