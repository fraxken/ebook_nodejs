# 🐢 Node.js

## 🌟 Les différents modules core

### Assert

Un module assez simpliste contenant diverses fonctions d’assertion. Cela peut s’avérer utile si vous êtes du genre à faire des tests unitaires de manière assez simpliste (sans passer par de gros frameworks). Néanmoins cela peut très bien être utilisé pour des codes (c’est souvent utilisé dans des exercices ou des challenges par exemple).

```js
import assert from "node:assert/strict";

assert.equal(5, 5);
assert.deepEqual({ a: "boo" }, { a: "boo" });
assert.notDeepStrictEqual({ a: 1, a: "1" });
assert.match("I will pass", /pass/);
```

---

⬅️ [🌟 Les différents modules core: VM](./10-vm.md) |
➡️ [🌟 Les différents modules core: Zlib](./12-zlib.md)
