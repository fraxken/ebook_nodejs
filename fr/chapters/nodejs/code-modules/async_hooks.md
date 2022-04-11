# 🐢 Node.js

## 🌟 Les différents modules core

### async_hooks

Je ne suis pas encore un grand expert sur les hooks Asynchrone (et le module est encore expérimental). Néanmoins je vous recommande de jeter un œil tout particulièrement à [l'API AsyncLocalStorage](https://nodejs.org/api/async_hooks.html#async_hooks_class_asynclocalstorage) créé par Vladimir.

Articles et vidéos intéressantes sur le sujet:

- EN [Node.js 14 & AsyncLocalStorage: Share a context between asynchronous calls](https://blog.kuzzle.io/nodejs-14-asynclocalstorage-asynchronous-calls)
- EN [Making async context management faster, safer, and more stable by doing less - Stephen Belanger](https://www.youtube.com/watch?v=WIVO_CfQ5ek)
- EN [Fun with async hooks and stack traces - Zbyszek Tenerowicz | WFH Conf 2020](https://www.youtube.com/watch?v=M5SoPVMZz0I)

L’intégration est en cours sur différents frameworks comme Adonis.js :

- [feat: add AsyncHttpContext (wip)](https://github.com/adonisjs/http-server/pull/18) 


---
[Page précédente](./perf_hooks.md)
[Page suivante](./crypto.md)