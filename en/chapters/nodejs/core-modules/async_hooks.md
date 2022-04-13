# 🐢 Node.js

## 🌟 The different core modules

### async_hooks

I'm not a big expert on Asynchronous hooks yet (and the module is still experimental). However, I recommend that you take a look in particular at the [AsyncLocalStorage API](https://nodejs.org/api/async_hooks.html#async_hooks_class_asynclocalstorage) created by Vladimir.

Interesting articles and videos on the topic:

- EN [Node.js 14 & AsyncLocalStorage: Share a context between asynchronous calls](https://blog.kuzzle.io/nodejs-14-asynclocalstorage-asynchronous-calls)
- EN [Making async context management faster, safer, and more stable by doing less - Stephen Belanger](https://www.youtube.com/watch?v=WIVO_CfQ5ek)
- EN [Fun with async hooks and stack traces - Zbyszek Tenerowicz | WFH Conf 2020](https://www.youtube.com/watch?v=M5SoPVMZz0I)

The integration is in progress on different frameworks like Adonis.js:

- [feat: add AsyncHttpContext (wip)](https://github.com/adonisjs/http-server/pull/18)

---

⬅️ [🌟 The different core modules: perf_hooks](./perf_hooks.md) |
➡️ [🌟 The different core modules: Crypto](./crypto.md)
