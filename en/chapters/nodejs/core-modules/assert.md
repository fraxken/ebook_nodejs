# 🐢 Node.js

## 🌟 The different core modules

### Assert

A fairly simplistic module containing various assertion functions. This can be useful if you are the type to do unit tests in a fairly simplistic way (without going through large frameworks). However, it can very well be used for codes (it is often used in exercises or challenges for example).

```js
const assert = require("assert").strict;

assert.strictEqual(5, 5);
assert.deepStrictEqual({ a: "boo", { a: "boo" });
assert.notDeepStrictEqual({ a: 1, a: "1" });
assert.match("I will pass", /pass/);
```

---

⬅️ [🌟 The different core modules: VM](./vm.md) |
➡️ [🌟 The different core modules: Zlib](./zlib.md)
