# 🐢 Node.js

## 🌟 Les différents modules core

### URL (API WHATWG)

Implémentation de l’API [URL](https://nodejs.org/api/url.html) du navigateur. Par défaut disponible sur le namespace Global comme pour les timers. URL est vraiment pratique pour la création et manipulation d’URL (comme pour path beaucoup de développeurs peu expérimentés vont construire des solutions maison alors que cet API leur permettrait de faire ce qu’ils souhaitent très simplement).

À mon goût cela devrait être beaucoup plus utilisé (même pour déclarer et identifier une URL dans un code JavaScript). L’évolution et la maintenance des codes n’en seront que bien plus simple.

```js
const myURL = new URL("https://example.org/?abc=123");
console.log(myURL.searchParams.get("abc"));
// Prints 123

myURL.searchParams.append("abc", "xyz");
console.log(myURF.href);
// Prints https://example.org/?abc=132&abc=xyz

myURL.searchParams.delete("abc");
myURL.searchParams.set("a", "b");
console.log(myURL.href);
// Prints https://example.org/?a=b
```

Le constructeur s’occupera de valider l’URL pour vous (une erreur sera throw s’il l’URL n’est pas valide). Vous pourrez ensuite récupérer toutes les informations que vous souhaitez sur votre URL (protocol, username, password, hostname, port, pathname, query etc).

URL peut être aussi utilisé en ESM avec import.meta.url pour remplacer `__dirname`.

```js
import { readFileSync } from "node:fs";

const buffer = readFileSync(new URL("./data.proto", import.meta.url));
```

Bonus: [How to migrate from querystring to URLSearchParams in Node.js](https://www.linkedin.com/pulse/how-migrate-from-querystring-urlsearchparams-nodejs-vladim%25C3%25ADr-gorej/?trackingId=OEdtd%2BKZRxWNkgptsoWKlA%3D%3D)


#### URL.parse

```js
// Avant
let url = null;
try {
  url = new URL(input, base);
} catch {}

// Après
const url = URL.parse(input, base);
```

#### Liens

- [WHATWG-compliant and fast URL parser written in modern C++](https://github.com/ada-url/ada)
- [Yagiz Nizipli & Daniel Lemire | Ada: Parsing Millions of URLs per Second](https://www.youtube.com/watch?v=tQ-6OWRDsZg)

---

⬅️ [🌟 Les différents modules core: Timers](./5-timers.md) |
➡️ [🌟 Les différents modules core: OS](./7-os.md)
