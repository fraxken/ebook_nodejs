# 🐢 Node.js

## 🌟 Les différents modules core

### Zlib

Le module [zlib](https://nodejs.org/api/zlib.html) fournit des fonctionnalités de compression mises en œuvre à l'aide de Gzip, Deflate/Inflate et Brotli. Vous aurez à l’utiliser le plus souvent si vous manipulez des archives sur votre système.

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

Si vous avez à gérer des archives en .tar ou .zip je vous recommande les packages suivants :

- [tar-fs](https://github.com/mafintosh/tar-fs)
- [Unzipper](https://github.com/SlimIO/unzipper)

---

⬅️ [🌟 Les différents modules core: Assert](./assert.md) |
➡️ [🌟 Les différents modules core: Readline](./readline.md)
