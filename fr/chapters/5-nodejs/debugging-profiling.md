# 🐢 Node.js

## 🔍 Debugging & Profiling

S’améliorer et s’éveiller sur des sujets comme le debug est très important en tant que développeur pour ne pas être perdu sur les actions à suivre lorsque l'on rencontre un souci un peu chevelu (qui demandera donc un peu plus que quelque console.log).

> Notez tout de même que si vous avez besoin d’aller aussi loin, il y a peut-être un souci dans votre façon d 'architecturer votre code.

Voici une liste de ressources qui pourraient vous êtres nécessaire de lire :

- FR [Comment détecter un memory leak dans une application Node.Js ? PARTIE 1 `--trace-gc` flag (v8) par Tony Gorez](https://www.youtube.com/watch?v=nCamxCaLT2E)
- EN [Node.js debugging best practices - Joyent](https://www.joyent.com/node-js/production/debug)
- EN [Node.js official debugging guide](https://nodejs.org/en/docs/guides/debugging-getting-started/)
- EN [Node.js debugger API](https://nodejs.org/api/debugger.html)
- EN [VS Code integrated tools for Node.js](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial#_debugging-your-node-application)
- EN [Easy profiling for Node.js Applications](https://nodejs.org/en/docs/guides/simple-profiling/)
- EN [Create a Dump of the V8 Heap in Nodejs](https://medium.com/better-programming/make-a-dump-of-the-v8-heap-and-inspect-for-your-node-app-b69f7b68c162)
- EN [Node.js console API](https://nodejs.org/api/console.html) (there is not only console.log ^^).
- EN [Clinic.js rises to the top in diagnosing Node.js performance issues](https://www.nearform.com/blog/clinicjs-rises-top-diagnosing-nodejs-performance/)
- EN [Experimenting with remote debugging: Node.js runtime code injection](https://blog.sqreen.com/remote-debugging-nodejs-runtime-code-injection/)
- EN [Node.js Memory Limits - What You Should Know](https://blog.appsignal.com/2021/12/08/nodejs-memory-limits-what-you-should-know.html)
- EN [The Importance of Measuring Memory Allocation in Node.js Applications](https://www.nearform.com/blog/tracking-memory-allocation-node-js/)

Si vous êtes plutôt à la recherche d’outils (pour de la génération de flamegraphs par exemple).

- EN [0x🔥](https://github.com/davidmarkclements/0x)
- EN [Clinicjs Flame](https://clinicjs.org/flame/) (the tool has many other modes that I also recommend).
- EN [Investigates v8/Node.js function deoptimizations.](https://github.com/thlorenz/deoptigate)
- EN [Collect runtime type information 😻 of your JavaScript code.](https://github.com/fhinkel/type-profile)
- EN [Why is node running](https://github.com/mafintosh/why-is-node-running) (cool to find alive event loop references).

Si vous avez besoin de faire du benchmark vis à vis de vos tests alors je vous recommande [autocannon.](https://github.com/mcollina/autocannon).

---

⬅️ [🐢 Node.js: 📦 Packages](./packages.md) |
➡️ [🐢 Node.js: Modules (CJS & ESM)](./modules.md)
