# 🐢 Node.js

## 📊 Test unitaire et coverage

Réaliser des tests unitaires est une bonne solution pour s'entraîner et mieux comprendre comment un code X ou Y fonctionne (et vous force à étudier diverses fonctionnalités de JavaScript). Néanmoins il peut vite être difficile de s’y retrouver dans un écosystème où le choix de framework/lib est vaste :

[Mocha](https://mochajs.org/), [Ava](https://github.com/avajs/ava), [Jest](https://jestjs.io/), [Japa](https://github.com/thetutlage/japa), [Tape](https://www.npmjs.com/package/tape), [uvu](https://github.com/lukeed/uvu) et beaucoup d’autres...

Certains auront l’avantage d’être plus complet (plus lourd) et d’autres plus simpliste. Quelquefois cela se joue sur différents détails comme le choix de la librairie d’assertion ([Chai.js](https://www.chaijs.com/) par exemple) ou bien l’inclusion du coverage par défaut.

En ce qui me concerne, après plusieurs années d’expérience avec ces différentes librairies, ma préférence penche plutôt pour [Jest](https://jestjs.io/) qui offre une expérience d’ensemble plutôt complète et agréable. Néanmoins, il m’arrive pour des projets très spécifiques, d’utiliser des libs de testing simples en combinaison avec C8 (de plus [Jest peut s’avérer problématique à cause de la réécriture du scope global sur Node.js](https://github.com/facebook/jest/issues/2549)).

Lorsque le coverage n’est pas inclus par défaut il vous faudra potentiellement réfléchir à l’inclure vous même avec [Nyc](https://github.com/istanbuljs/nyc) ou [C8](https://github.com/bcoe/c8) (petit frère plus récent et plus complet utilisant [le coverage natif de V8 Engine](https://v8.dev/blog/javascript-code-coverage)). C8 est notamment capable d’offrir le coverage même quand le code est exécuté au travers de différents child process (ou worker).

Talks et articles:

- EN [Rethinking JavaScript Test Coverage](https://v8.dev/blog/javascript-code-coverage)
- EN [Workshop: Dead-Simple Testing with Mocha](https://www.youtube.com/watch?v=JhQ-PuwoWAE&list=PLyspMSh4XhLP-mqulUMcaqTbLo-ZJxSX5&index=24)
- EN [Rogelio Guzman - Jest Snapshots and Beyond](https://www.youtube.com/watch?v=HAuXJVI_bUs&feature=emb_logo)
- EN [Establishing testing patterns with software design principles](https://www.youtube.com/watch?v=_pnW-JjmyXE&feature=emb_logo)
- EN [Comprehensive and exhaustive JavaScript & Node.js testing best practices (January 2021)](https://github.com/goldbergyoni/javascript-testing-best-practices)
- EN [JavaScript testing best practices](https://github.com/goldbergyoni/javascript-testing-best-practices)

### 💃 Méthodologies

De nos jours, il n’est pas rare que les juniors soient **forcés** à appliquer des méthodologies sans que leur mentor n’apporte de réelle réflexion ou arguments: “**c’est comme ça si tu veux devenir un bon développeur**”.

Je pense qu’apprendre à écrire des tests est essentiel pour un développeur (et que c’est plutôt sur cette fondation commune que nous devons nous appuyer pour guider les débutants).

Il est important de conserver un fort esprit critique sur les différents choix que l'on essayera de vous imposer comme des pratiques qu'il faut **constamment appliquer** car celles-ci vous enferment certainement dans une bulle idéologique (**ce qui n'est pas une invitation à ne rien faire**).

Par exemple, apprendre TDD et autres méthodologies sera bénéfique pour ajouter des cordes à votre ARC (surtout sur certains projets où leur pratique sera une plus- value). Néanmoins, cela ne veut pas dire qu’elles sont absolues à l’intégralité des contextes et projets **ou qu’il ne faut pas en débattre**.

Quelques liens pour vous faire une “opinion”:

- FR [BDD, DDD, ATDD et TDD expliqués !](https://www.youtube.com/watch?v=jxBmKvS7lAo)
- EN [Why Most Unit Testing is Waste](https://rbcs-us.com/documents/Why-Most-Unit-Testing-is-Waste.pdf)
- EN [Test-induced design damage.](https://dhh.dk/2014/test-induced-design-damage.html)
- EN [TDD is dead. Long live testing.](https://dhh.dk/2014/tdd-is-dead-long-live-testing.html)
- EN [TW Hangouts | Is TDD dead?.](https://www.youtube.com/watch?v=z9quxZsLcfo)
- EN [TDD, Where Did It All Go Wrong](https://www.youtube.com/watch?v=EZ05e7EMOLM)
- FR [LMHB #5: KEEP CALM & TDD ! FEAT. LIODA (Test-driven development)](https://www.youtube.com/watch?v=sFTgS0qxNa0)

Dans notre domaine nous parlons très peu de cela tellement ils sont sujets à des tensions extrêmes entre nous. Je trouve quelquefois dommage que l'on ne puisse pas discuter sans y amener son lot de toxicité et d’ego.

---
[Page précédente](./websocket.md)
[Page suivante](./core-modules/console.md)
