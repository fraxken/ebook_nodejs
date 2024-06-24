# 🐢 Node.js

## 🔍 Debugging & Profiling

Improving on topics like debugging is very important as a developer in order not to be lost on what to do when you encounter a hairy problem (which will require a little more than some console.log). 

> Note however that if you need to go that far, there may be a problem in the way you architect your code.

Here is a list of resources that you may need to read:

- [Node.js debugging best practices - Joyent](https://www.joyent.com/node-js/production/debug)
- [Node.js official debugging guide](https://nodejs.org/en/docs/guides/debugging-getting-started/)
- [Node.js debugger API](https://nodejs.org/api/debugger.html)
- [VS Code integrated tools for Node.js](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial#_debugging-your-node-application)
- [Easy profiling for Node.js Applications](https://nodejs.org/en/docs/guides/simple-profiling/)
- [Create a Dump of the V8 Heap in Nodejs](https://medium.com/better-programming/make-a-dump-of-the-v8-heap-and-inspect-for-your-node-app-b69f7b68c162)
- [Node.js console API](https://nodejs.org/api/console.html) (there is not only console.log ^^).
- [Clinic.js rises to the top in diagnosing Node.js performance issues](https://www.nearform.com/blog/clinicjs-rises-top-diagnosing-nodejs-performance/)
- [Experimenting with remote debugging: Node.js runtime code injection](https://blog.sqreen.com/remote-debugging-nodejs-runtime-code-injection/)
- [Node.js Memory Limits - What You Should Know](https://blog.appsignal.com/2021/12/08/nodejs-memory-limits-what-you-should-know.html)
- [The Importance of Measuring Memory Allocation in Node.js Applications](https://www.nearform.com/blog/tracking-memory-allocation-node-js/)
- [Monitoring Node.js Performance](https://hire.jonasgalvez.com.br/2023/jan/31/monitoring-nodejs-performance/)
- [Debugging Node.js using LLDB](https://mertcan.vercel.app/debugging-nodejs-with-lldb)

If you are rather looking for tools (for flamegraphs generation for example).

- [0x🔥](https://github.com/davidmarkclements/0x)
- [Node-observe](https://github.com/mmarchini-oss/node-observe)
- [ClinicJS](https://clinicjs.org/)
- [trace GC](https://nodejs.org/fr/docs/guides/diagnostics/memory/using-gc-traces)
- [Why is node running](https://github.com/mafintosh/why-is-node-running) (cool to find alive event loop references).

If you need to benchmark your tests then I recommend [autocannon.](https://github.com/mcollina/autocannon)

---

⬅️ [🐢 Node.js: 📦 Packages](./8-packages.md) |
➡️ [🐢 Node.js: Modules (CJS & ESM)](./10-modules.md)