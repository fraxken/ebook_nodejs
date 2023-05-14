# 🐢 Node.js

## 🌟 Les différents modules core

### Timers

Le module [Timers](https://nodejs.org/api/timers.html) de Node.js contient des fonctions qui exécutent le code après une période de temps déterminée. Il n'est pas nécessaire d'importer les timers via require(), car toutes les méthodes sont disponibles globalement pour émuler l'API JavaScript du navigateur.

> Je vous recommande d’aller lire le guide officiel de Node.js sur les [timers](https://nodejs.org/en/docs/guides/timers-in-node/).


Les functions disponibles sont le setImmediate, setTimeout et setInterval.

**setImmediate** est une function unique à Node.js (elle n’existe pas dans le navigateur) et elle permet d’exécuter du code au début de la prochaine itération de l’event-loop.

```js
import { setInterval } from "node:timers/promises";

for await (const startTime of setInterval(100, Date.now())) {
    const now = Date.now();
    console.log(now);
    if ((now - startTime) > 1000) {
        break;
    }
}
console.log(Date.now());
```

Noter qu’il est possible d’appeler la méthode unref sur un timer pour que l’event-loop puisse s’arrêter même si le timer est encore actif. C’est très utile dans les cas où vous ne voulez absolument pas qu’un timer (interval par exemple) puisse empêcher l’event-loop de s’arrêter.

C’est par exemple le cas dans le package [SlimIO/Config](https://github.com/SlimIO/Config/blob/master/src/config.class.js#L272) ou un setInterval est utilisé pour constamment nettoyer des Observables qui ont été clôturés (pour éviter un memory-leak). Néanmoins je ne souhaite pas que le timer en question empêche l’arrêt de l’event-loop dans le cas où quelqu’un utiliserait mon package :) 

#### Annuler un timer

Il est possible d'annuler un timer avec un AbortSignal (sur l'API promises).

```js
import * as timers from "node:timers/promises";

await timers.setTimeout(10_000, {
    signal: AbortSignal.timeout(500)
});
```

---

⬅️ [🌟 Les différents modules core: FileSystem (fs)](./4-fs.md) |
➡️ [🌟 Les différents modules core: URL (API WHATWG)](./6-url.md)
