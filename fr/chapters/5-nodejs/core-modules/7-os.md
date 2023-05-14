# 🐢 Node.js

## 🌟 Les différents modules core

### OS

Le module core [OS](https://nodejs.org/api/os.html) est composé d’un ensemble d’utilitaires qui va vous permettre d'interagir et récupérer des informations sur votre système. Comme par exemple:

- Les interfaces réseaux sur votre machine.
- Des informations sur vos CPU (load, endianness, model, speed).
- Des informations sur la mémoire de votre machine.
- Des informations sur votre système d’exploitation (version, répertoire temporaire, répertoire racine, etc..).

```js
import os from "node:os";

console.log(os.uptime());

// Utile en combinaison avec child_processs
console.log(os.availableParallelism());

/**
 * Très utile notamment lors de la création de CLI
 * 
 * - \n sur POSIX
 * - \r\n sur Windows
 */
console.log(os.EOL);
````

---

⬅️ [🌟 Les différents modules core: URL](./6-url.md) |
➡️ [🌟 Les différents modules core: Child process](./8-child_process.md)
