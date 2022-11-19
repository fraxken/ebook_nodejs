# 🐢 Node.js

## 🌟 The different core modules

### Zlib

The [zlib](https://nodejs.org/api/zlib.html) module provides compression functionality implemented using Gzip, Deflate/Inflate, and Brotli. You will have to use it most often if you are dealing with archives on your system.

```js
for await (const [file, fileLocation] of getFilesRecursive(tempLocation)) {
    const rel = dirname(relative(tempLocation, fileLocation));
    if (rel !== "." && !memcache.has(rel)) {
        await mkdir(join(destination, rel), { recursive: true });
        memcache.add(rel);
    }

    const pendingPromise = pipestreams(
        createReadStream(fileLocation),
        zlib.createBrotliDecompress(), // <--
        createWriteStream(join(destination, rel, file));
    );
    streamPromises.push(pendingPromise);
}
```

If you have to manage archives in .tar or .zip I recommend the following packages:

- [tar-fs](https://github.com/mafintosh/tar-fs)
- [Unzipper](https://github.com/SlimIO/unzipper)

---

⬅️ [🌟 The different core modules: Assert](./assert.md) |
➡️ [🌟 The different core modules: Readline](./readline.md)
