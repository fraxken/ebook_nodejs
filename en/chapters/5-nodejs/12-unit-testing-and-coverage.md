# 🐢 Node.js

## 📊 Unit testing and coverage

Performing unit tests is a good way to practice and better understand how X or Y code works (and forces you to study various JavaScript features). Nevertheless it can be difficult to find your way in an ecosystem where the choice of frameworks/libraries is vast:

[Mocha](https://mochajs.org/), [Ava](https://github.com/avajs/ava), [Jest](https://jestjs.io/), [Japa](https://github.com/thetutlage/japa), [Tape](https://www.npmjs.com/package/tape), [uvu](https://github.com/lukeed/uvu) and a lot of others...

Some will have the advantage of being more complete (heavier) and others more simplistic. Sometimes it comes down to details like the choice of the assertion library ([Chai.js](https://www.chaijs.com/) for example) or the inclusion of coverage by default.

> [!WARNING]
> The use of Jest for back-end testing is not recommended (poor performance, rewriting of globals, etc.).

When the coverage is not included by default you may have to think about including it yourself with [C8](https://github.com/bcoe/c8) (a lib using [the native coverage of V8 Engine](https://v8.dev/blog/javascript-code-coverage)). C8 is able to offer coverage even when the code is executed through different child processes (or workers).

Talks and articles:

- [Rethinking JavaScript Test Coverage](https://v8.dev/blog/javascript-code-coverage)
- [Comprehensive and exhaustive JavaScript & Node.js testing best practices (January 2021)](https://github.com/goldbergyoni/javascript-testing-best-practices)
- [Writing Tests With Fastify and Node Test Runner](https://www.nearform.com/blog/writing-tests-with-fastify-and-node-test-runner/)
- [How to create E2E tests in Node.js with no frameworks - step by step!](https://blog.erickwendel.com.br/how-to-create-e2e-tests-in-nodejs-with-no-frameworks-step-by-step)

### 💃 Méthodologies

Nowadays, it's not uncommon for juniors to be forced to apply methodologies without any real thought or argument from their mentor: "this is how you want to become a good developer".

I think that learning to write tests is essential for a developer (and that it is rather this common foundation that we should build on to guide beginners).

It is important to keep a strong critical mind on the different choices that we will try to impose on you as practices that you must constantly apply because they certainly lock you in an ideological bubble (which is not an invitation to do nothing).

For example, learning TDD and other methodologies will be beneficial to add strings to your ARC (especially on some projects where their practice will be an added value). However, this does not mean that they are absolute to all contexts and projects or that they should not be discussed.

Here are some links to help you make a first "opinion":

- [Why Most Unit Testing is Waste](https://rbcs-us.com/documents/Why-Most-Unit-Testing-is-Waste.pdf)
- [Test-induced design damage.](https://dhh.dk/2014/test-induced-design-damage.html)
- [TDD is dead. Long live testing.](https://dhh.dk/2014/tdd-is-dead-long-live-testing.html)
- [TW Hangouts | Is TDD dead?.](https://www.youtube.com/watch?v=z9quxZsLcfo)
- [TDD, Where Did It All Go Wrong](https://www.youtube.com/watch?v=EZ05e7EMOLM)

In our field we talk very little about this so much that it is subject to extreme tension between us. I sometimes think it's a shame that we can't discuss it without bringing in our own toxicity and ego.

---

⬅️ [🐢 Node.js: WebSocket](./11-websocket.md) |
➡️ [🌟 The different core modules: Console](./13-core-modules/1-console.md)