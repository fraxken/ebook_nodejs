# 🐢 Node.js

## 🔍 Debugging & Profiling

Improving on topics like debugging is very important as a developer in order not to be lost on what to do when you encounter a hairy problem (which will require a little more than some console.log). 

> Note however that if you need to go that far, there may be a problem in the way you architect your code.

Here is a list of resources that you may need to read:

- EN [Node.js debugging best practices - Joyent](https://www.joyent.com/node-js/production/debug)
- EN [Node.js official debugging guide](https://nodejs.org/en/docs/guides/debugging-getting-started/)
- EN [Node.js debugger API](https://nodejs.org/api/debugger.html)
- EN [VS Code integrated tools for Node.js](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial#_debugging-your-node-application)
- EN [Easy profiling for Node.js Applications](https://nodejs.org/en/docs/guides/simple-profiling/)
- EN [Create a Dump of the V8 Heap in Nodejs](https://medium.com/better-programming/make-a-dump-of-the-v8-heap-and-inspect-for-your-node-app-b69f7b68c162)
- EN [Node.js console API](https://nodejs.org/api/console.html) (there is not only console.log ^^).
- EN [Clinic.js rises to the top in diagnosing Node.js performance issues](https://www.nearform.com/blog/clinicjs-rises-top-diagnosing-nodejs-performance/)
- EN [Experimenting with remote debugging: Node.js runtime code injection](https://blog.sqreen.com/remote-debugging-nodejs-runtime-code-injection/)

If you are rather looking for tools (for flamegraphs generation for example).

- EN [0x🔥](https://github.com/davidmarkclements/0x)
- EN [Clinicjs Flame](https://clinicjs.org/flame/) (the tool has many other modes that I also recommend).
- EN [Investigates v8/Node.js function deoptimizations.](https://github.com/thlorenz/deoptigate)
- EN [Collect runtime type information 😻 of your JavaScript code.](https://github.com/fhinkel/type-profile)
- EN [Why is node running](https://github.com/mafintosh/why-is-node-running) (cool to find alive event loop references).

If you need to benchmark your tests then I recommend [autocannon.](https://github.com/mcollina/autocannon)

---

[Previous](./packages.md)
[Next](./modules.md)