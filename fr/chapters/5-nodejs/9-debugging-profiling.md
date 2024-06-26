# 🐢 Node.js

## 🔍 Debugging & Profiling

S’améliorer et s’éveiller sur des sujets comme le debug est très important en tant que développeur pour ne pas être perdu sur les actions à suivre lorsque l'on rencontre un souci un peu chevelu (qui demandera donc un peu plus que quelque console.log).

> [!NOTE]
> Si vous avez besoin d’aller aussi loin, il y a peut-être un souci dans votre façon d 'architecturer votre code.

Voici une liste de ressources qui pourraient vous êtres nécessaire de lire :

- EN [Node.js debugging best practices](https://www.tritondatacenter.com/node-js/production/debug)
- EN [Node.js official debugging guide](https://nodejs.org/en/docs/guides/debugging-getting-started/)
- EN [Node.js debugger API](https://nodejs.org/api/debugger.html)
- EN [VS Code integrated tools for Node.js](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial#_debugging-your-node-application)
- EN [Easy profiling for Node.js Applications](https://nodejs.org/en/docs/guides/simple-profiling/)
- EN [Node.js console API](https://nodejs.org/api/console.html) (Il n'y a pas que `console.log` dans la vie ^^).
- EN [Clinic.js rises to the top in diagnosing Node.js performance issues](https://www.nearform.com/blog/clinicjs-rises-top-diagnosing-nodejs-performance/)
- EN [Experimenting with remote debugging: Node.js runtime code injection](https://blog.sqreen.com/remote-debugging-nodejs-runtime-code-injection/)
- EN [Node.js Performance Analysis Without Changing Your Code](https://dev.to/mmarchini/nodejs-performance-analysis-without-changing-your-code-90g)
- EN [Debugging Node.js using LLDB](https://mertcan.vercel.app/debugging-nodejs-with-lldb)
- EN [Monitoring Node.js Performance](https://hire.jonasgalvez.com.br/2023/jan/31/monitoring-nodejs-performance/)

Des ressources plutôt autour de la gestion et debug de la mémoire (memory leak ...).

- FR [Comment détecter un memory leak dans une application Node.Js ? PARTIE 1 `--trace-gc` flag (v8) par Tony Gorez](https://www.youtube.com/watch?v=nCamxCaLT2E)
- EN [Tracing garbage collection (Official Node.js Guide)](https://nodejs.org/en/docs/guides/diagnostics/memory/using-gc-traces)
- EN [Node.js Memory Limits - What You Should Know](https://blog.appsignal.com/2021/12/08/nodejs-memory-limits-what-you-should-know.html)
- EN [The Importance of Measuring Memory Allocation in Node.js Applications](https://www.nearform.com/blog/tracking-memory-allocation-node-js/)
- EN [Create a Dump of the V8 Heap in Nodejs](https://medium.com/better-programming/make-a-dump-of-the-v8-heap-and-inspect-for-your-node-app-b69f7b68c162)
- EN [Finding memory leaks and CPU bottlenecks with Node.js debug tools - Vladimir de Turckheim](https://www.youtube.com/watch?v=F_qshjijxlE)
- EN [Demystifying Memory Leaks and Profiling in Node.js - Ruben Bridgewater ](https://www.youtube.com/watch?v=Xj1OQzptrjk)

Si vous êtes plutôt à la recherche d’outils (pour de la génération de flamegraphs par exemple).

- EN [0x🔥](https://github.com/davidmarkclements/0x)
- EN [Node-observe](https://github.com/mmarchini-oss/node-observe)
- EN [ClinicJS](https://clinicjs.org/)
- EN [trace GC](https://nodejs.org/fr/docs/guides/diagnostics/memory/using-gc-traces)
- EN [Why is node running](https://github.com/mafintosh/why-is-node-running) (cool to find alive event loop references).

Si vous avez besoin de faire du benchmark vis à vis de vos tests alors je vous recommande [autocannon.](https://github.com/mcollina/autocannon).

---

⬅️ [🐢 Node.js: 📦 Packages](./8-packages.md) |
➡️ [🐢 Node.js: Modules (CJS & ESM)](./10-modules.md)
