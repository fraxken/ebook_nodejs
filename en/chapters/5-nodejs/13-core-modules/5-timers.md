# 🐢 Node.js

## 🌟 The different core modules

### Timers

The Node.js [Timers](https://nodejs.org/api/timers.html) module contains functions that execute code after a specified period of time. There is no need to import timers through require(), as all methods are globally available to emulate the browser's JavaScript API.

> I recommend that you read the official Node.js guide on [timers](https://nodejs.org/en/docs/guides/timers-in-node/).

The available functions are setImmediate, setTimeout and setInterval.

***setImmediate*** is a function unique to Node.js (it does not exist in the browser) and it allows code to be executed at the start of the next iteration of the event-loop.

```js
import { setInterval} from "timers/promises";

for await (const startTime of setInterval(100, Date.now())) {
    const now = Date.now();
    console.log(now);
    if ((now - startTime) > 1000) {
        break;
    }
}
console.log(Date.now());
```

Note that it is possible to call the unref method on a timer so that the event-loop can stop even if the timer is still active. This is very useful in cases where you absolutely do not want a timer (interval for example) to be able to prevent the event-loop from stopping.

This is for example the case in the [SlimIO/Config](https://github.com/SlimIO/Config/blob/master/src/config.class.js#L272) package where a setInterval is used to constantly clean up Observables that have been closed (to avoid a memory-leak). However, I don't want the timer in question to prevent the event-loop from stopping if someone uses my package :)

#### Links

- [Your Node is Leaking Memory? setTimeout Could be the Reason](https://lucumr.pocoo.org/2024/6/5/node-timeout/)

---

⬅️ [🌟 The different core modules: FileSystem](./4-fs.md) |
➡️ [🌟 The different core modules: URL (API WHATWG)](./6-url.md)