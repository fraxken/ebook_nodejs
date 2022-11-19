# 🐢 Node.js

## 📊 Unit testing and coverage

Performing unit tests is a good way to practice and better understand how X or Y code works (and forces you to study various JavaScript features). Nevertheless it can be difficult to find your way in an ecosystem where the choice of frameworks/libraries is vast:

[Mocha](https://mochajs.org/), [Ava](https://github.com/avajs/ava), [Jest](https://jestjs.io/), [Japa](https://github.com/thetutlage/japa), [Tape](https://www.npmjs.com/package/tape), [uvu](https://github.com/lukeed/uvu) and a lot of others...

Some will have the advantage of being more complete (heavier) and others more simplistic. Sometimes it comes down to details like the choice of the assertion library ([Chai.js](https://www.chaijs.com/) for example) or the inclusion of coverage by default.

As far as I'm concerned, after several years of experience with these different libraries, my preference is for [Jest](https://jestjs.io/) which offers a rather complete and pleasant overall experience. Nevertheless, for very specific projects, I sometimes use simple testing libs in combination with C8 (moreover Jest can [be problematic because of the global scope rewriting on Node.js](https://github.com/facebook/jest/issues/2549)).

When the coverage is not included by default you may have to think about including it yourself with [Nyc](https://github.com/istanbuljs/nyc) or [C8](https://github.com/bcoe/c8) (a more recent and complete brother using [the native coverage of V8 Engine](https://v8.dev/blog/javascript-code-coverage)). C8 is able to offer coverage even when the code is executed through different child processes (or workers).

Talks and articles:

- [Rethinking JavaScript Test Coverage](https://v8.dev/blog/javascript-code-coverage)
- [Workshop: Dead-Simple Testing with Mocha](https://www.youtube.com/watch?v=JhQ-PuwoWAE&list=PLyspMSh4XhLP-mqulUMcaqTbLo-ZJxSX5&index=24)
- [Rogelio Guzman - Jest Snapshots and Beyond](https://www.youtube.com/watch?v=HAuXJVI_bUs&feature=emb_logo)
- [Establishing testing patterns with software design principles](https://www.youtube.com/watch?v=_pnW-JjmyXE&feature=emb_logo)
- [Comprehensive and exhaustive JavaScript & Node.js testing best practices (January 2021)](https://github.com/goldbergyoni/javascript-testing-best-practices)
- [JavaScript testing best practices](https://github.com/goldbergyoni/javascript-testing-best-practices)

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