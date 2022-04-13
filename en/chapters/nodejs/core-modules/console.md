# 🐢 Node.js

## 🌟 The different core modules

### Console

The [console](https://nodejs.org/api/console.html) module is the one we use the most (through the console.log and console.error methods for example). Obviously here the objective is to simulate the browser as much as possible so as not to have to manage the stdout and stderr outputs directly ourselves through the process variable (which still can be interesting, I invite you to go see the [TTY](https://nodejs.org/api/tty.html) doc to discover much more advanced manipulations of the standard output).

Very often the developers do not use ¼ of the methods present in the module and it is rather unfortunate. Take the time to explore the documentation to learn about the different methods and what they allow you to do.

Few examples:

```js
console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
// +---------+-----+-----+
// | (index) |  a  |  b  |
// +---------+-----+-----+
// |    0    |  1  | 'Y' |
// |    1    | 'Z' |  2  |
// +---------+-----+-----+
```

Find out (approximately) the execution time of a code with console.time.

```js
console.time('100-elements');
for (let i = 0; i < 100; i++) {}
console.timeEnd('100-elements'));
// prints 100-elements: 225.438ms
```

---

[Previous](../unit-testing-and-coverage.md)
[Next](./console.md)

⬅️ [📊 Unit testing and coverage](../unit-testing-and-coverage.md) |
➡️ [🌟 The different core modules: Events](./events.md)