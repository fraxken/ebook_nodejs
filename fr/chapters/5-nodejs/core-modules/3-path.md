# 🐢 Node.js

## 🌟 Les différents modules core

### Path

Le module [path](https://nodejs.org/api/path.html) fournit des utilitaires pour travailler avec les chemins de fichiers et de répertoires.

Il sera la plupart du temps utilisé pour de la composition de chemin (si vous les faites à **<u>la main vous-même c’est que votre code n’est probablement pas cross-plateforme</u>**).

```js
const path = require("node:path");

// ⛔️ BAD
const bad = __dirname + "/" + "path";

// ✅ GOOD
const good = path.join(__dirname, "path");
```

Les chemins ne sont pas construits de la même manière selon le système d’exploitation qui sera utilisé (UNIX, Windows, MAC etc). Si vous êtes intéressés par les bonnes pratiques d'écriture de code cross-plateforme, je vous recommande [Awesome Node.js cross platform](https://github.com/bcoe/awesome-cross-platform-nodejs).

Le module path possède aussi un ensemble de méthodes qui vont vous permettre de récupérer les différentes parties qui composent le chemin d’un fichier ou dossier. Comme par exemple l’extension d’un fichier (que tous les juniors s’amusent à récupérer avec une RegExp ou avec des bidouilles .split etc).

```js
const path = require("path");

console.log(path.extname("boo.js")); // .js
```

---

Je vous invite à visionner ma vidéo Youtube qui couvre ce module core:

<a href="https://www.youtube.com/watch?v=j3I3vJKg6cI" target="_blank">
    <img src="../../../../assets/nodejs/core-modules/nodejs_path_miniature.jpg" alt="NodeSecure" width="450">
</a>

---

⬅️ [🌟 Les différents modules core: Events](./2-events.md) |
➡️ [🌟 Les différents modules core: FileSystem (fs)](./4-fs.md)
