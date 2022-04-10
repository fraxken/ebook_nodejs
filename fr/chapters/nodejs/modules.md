# 🐢 Node.js

## Modules (CJS & ESM)

En Node.js il existe deux façons de gérer des modules:

- [CJS](https://nodejs.org/api/modules.html) pour Common JavaScript
- [ESM](https://nodejs.org/api/esm.html) pour ECMAScript modules

ESM est le nouveau standard intégré depuis ECMAScript 6 pour la gestion des modules. Néanmoins historiquement Node.js utilise CJS depuis le début et à l’époque il y a eu beaucoup de soucis sur la spécification d’ESM (ce qui a rendu complexe l’implémentation dans l’écosystème Node js).

<img src="./../../../assets/nodejs/module-require.png" alt="Require module" width="400"/>

Avec CJS il est nécessaire d’utiliser la function require() et des mots-clés comme module.exports alors qu’en ESM il vous sera possible d’utiliser les mots-clés import et export.

<img src="./../../../assets/nodejs/module-import.png" alt="Import module" width="400"/>

Le support d’ESM sur Node.js devient de plus en plus stable et il n’est donc pas étonnant que cela deviennent le système de modules utilisé par défaut dans un futur proche.

Je vous recommande d’écouter les talks suivant pour mieux comprendre le sujet:

- [Extra Special Modules - Myles Borins, Google](https://www.youtube.com/watch?v=bP0tlIcA3ns)
- [Keynote: The Future of JavaScript is Universal - Myles Borins, Developer Advocate, Google](https://www.youtube.com/watch?v=o2M7g8Xwc7g)
- [ES Modules in Node.js - Gil Tayar](https://www.youtube.com/watch?v=mMEKrHmZLpQ&list=PL0CdgOSSGlBalMPxFFycq7OIqQF8cJS28&index=7)

Articles en lien avec ESM

- [Get Ready For ESM - Sindresorhus](https://blog.sindresorhus.com/get-ready-for-esm-aa53530b3f77)
- [Pure ESM package - Sindresorhus](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
- [Using ES Modules (ESM) in Node.js: A Practical Guide (Part 1](https://gils-blog.tayar.org/posts/using-jsm-esm-in-nodejs-a-practical-guide-part-1/)

---
[Page précédente](./debugging-profiling.md)
[Page suivante](./websocket.md)