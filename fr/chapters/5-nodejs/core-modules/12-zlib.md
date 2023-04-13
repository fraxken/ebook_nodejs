# 🐢 Node.js

## 🌟 Les différents modules core

### Zlib

Le module [zlib](https://nodejs.org/api/zlib.html) fournit des fonctionnalités de compression mises en œuvre à l'aide de Gzip, Deflate/Inflate et Brotli. Vous aurez à l’utiliser le plus souvent si vous manipulez des archives sur votre système.

```js
import path from "node:path";
import { createReadStream, createWriteStream, promises as fs } from "node:fs";
import { pipeline } from "node:stream/promises";
import zlib from "node:zlib";

for await (const [file, fileLocation] of getFilesRecursive(tempLocation)) {
    const rel = path.dirname(path.relative(tempLocation, fileLocation));
    if (rel !== "." && !memcache.has(rel)) {
        await fs.mkdir(path.join(destination, rel), { recursive: true });
        memcache.add(rel);
    }

    await pipeline(
        createReadStream(fileLocation),
        zlib.createBrotliDecompress(), // <--
        createWriteStream(join(destination, rel, file));
    );
}
```

Si vous avez à gérer des archives en .tar ou .zip je vous recommande les packages suivants :

- [tar-fs](https://github.com/mafintosh/tar-fs)

---

⬅️ [🌟 Les différents modules core: Assert](./11-assert.md) |
➡️ [🌟 Les différents modules core: Readline](./13-readline.md)
