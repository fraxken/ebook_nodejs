# 🐢 Node.js

## 🌟 The different core modules

### perf_hooks

Ce [module](https://nodejs.org/api/perf_hooks.html) fournit une implémentation d'un sous-ensemble des [API de performance Web du W3C](https://w3c.github.io/perf-timing-primer/) ainsi que des API supplémentaires pour les mesures de performance spécifiques à Node.js.

C’est un module vraiment cool qui va vous permettre de mesurer bien plus précisément les performances de méthodes JavaScript. Il est d’ailleurs fortement recommandé d’utiliser [performance.now()](https://nodejs.org/api/perf_hooks.html#perf_hooks_performance_now) plutôt que Date.now(). 


```js
import { performance, PerformanceObserver } from "perf_hooks";

function someFunction() {
    console.log("hello world");
}

const wrapped = performance.timerify(someFunction);

const obs = new PerformanceObserver((list) => {
    console.log(list.getEntries()[0].duration);
    obs.disconnect();
});
obs.observe({ entryTypes: ['function'] });

// A performance timeline entry will be created
wrapped();
```

In SlimIO [we use](https://github.com/SlimIO/Addon/blob/5c5963c36fca462452f04b724e6050664fb27efc/src/callback.class.js) the module in combination with Asynchronous hooks to allow us to generate metrics on the execution times of our callbacks (which allows us to do self monitoring).

The perf_hooks module also allows you to monitor the event-loop (see the monitoring section below for more resources on the subject).

---

⬅️ [🌟 The different core modules: Readline](./readline.md) |
➡️ [🌟 The different core modules: async_hooks](./async_hooks.md)
