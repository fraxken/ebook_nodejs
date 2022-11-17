# 🐢 Node.js

## 🌟 Les différents modules core

### Console

Le module [console](https://nodejs.org/api/console.html) est celui que nous utilisons le plus (par le biais des méthodes console.log et console.error par exemple). Évidemment ici l’objectif est de simuler le plus possible le navigateur pour ne pas avoir à gérer les sorties stdout et stderr directement nous-mêmes par le biais de la variable process (ce qui peut être tout de même intéressant, je vous invite à aller voir la doc  [TTY](https://nodejs.org/api/tty.html) pour y découvrir des manipulations bien plus avancées de la sortie standard).

Bien souvent les développeurs n’utilisent pas ¼  des méthodes présentes dans le module et c’est plutôt dommage. Prenez le temps d’explorer la documentation pour découvrir les différentes méthodes et ce qu’elles vous permettent de faire.

Quelques exemples;

```js
console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
// +---------+-----+-----+
// | (index) |  a  |  b  |
// +---------+-----+-----+
// |    0    |  1  | 'Y' |
// |    1    | 'Z' |  2  |
// +---------+-----+-----+
```

Connaître (approximativement) le temps d’exécution d’un code avec console.time.

```js
console.time('100-elements');
for (let i = 0; i < 100; i++) {}
console.timeEnd('100-elements'));
// prints 100-elements: 225.438ms
```

---

⬅️ [🐢 Node.js: 📊 Test unitaire et coverage](../test-unitaire-et-coverage.md) |
➡️ [🌟 Les différents modules core: Events](./events.md)
