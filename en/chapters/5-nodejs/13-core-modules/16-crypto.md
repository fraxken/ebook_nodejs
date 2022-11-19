# 🐢 Node.js

## 🌟 The different core modules

### Crypto

The [Crypto](https://nodejs.org/api/crypto.html) module (or more recently [Web crypto](https://nodejs.org/api/webcrypto.html) which is the version with Web-compatible API) is a module that will allow you to perform a set of operations related to the world of cryptography.

I'm not particularly comfortable with all of this, but as developers we still have fairly frequent needs such as generating a SHA256 string or that kind of thing (for signing a file for example).

```js
crypto.createHash("sha256").update("hello").digest("hex");
```
Obviously I do not recommend that you manage a password encryption yourself because it is very often the best way to do stupid things (use a lib like [Argon2](https://github.com/ranisalt/node-argon2) instead). If you want to know why I recommend you go read the [following article](https://medium.com/analytics-vidhya/password-hashing-pbkdf2-scrypt-bcrypt-and-argon2-e25aaf41598e).

Personally, I also often use the crypto module to generate random values:

```js
const crypto = require("crypto");

console.log(crypto.randomBytes(16).toString("hex"));
// 1a68967e44d1c1ad187f003ab95f3cd1

console.log(crypto.randomInt(100));
// 94

console.log(crypto.randomUUID());
// 7ea8c00a-cd01-442f-8011-56037e527b5f
```

---

⬅️ [🌟 The different core modules: async_hooks](./15-async_hooks.md) |
➡️ [🐢 Node.js: 📦 npm package archive](../14-npm-package-archive.md)
