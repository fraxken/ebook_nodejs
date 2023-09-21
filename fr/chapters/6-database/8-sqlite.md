# 💾 Database

## SQLite

Malgré plusieurs années à rechercher une solution bien plus optimale que [SQLite](https://www.sqlite.org/index.html) pour faire du stockage très “simplement” en local ou pour de l’embarqué (pour [SlimIO](https://github.com/SlimIO/events) notamment) et bien je peux vous dire que je n'ai pas encore trouvé mieux.

SQLite c’est vraiment un projet solide et mature qui fonctionne très bien. Pour SlimIO j’ai fait l’effort de lire l'intégralité de la [documentation officielle](https://www.sqlite.org/docs.html) et ce fut une énorme surprise pour moi… Tant de choses que j’ignorais sur le fonctionnement et les optimisations possibles (comme quoi.. toujours lire la doc!).

Drivers disponible dans l’écosystème :

- [sqlite3](https://github.com/mapbox/node-sqlite3)
- [better-sqlite3](https://github.com/JoshuaWise/better-sqlite3) (attention complètement synchrone).
- 🆕 [esqlite](https://github.com/mscdex/esqlite) (driver en dev très récent par mscdex).

Par dessus:

- [Neboa - Type-safe NoSQL with Node & SQLite.](https://aerotoad.github.io/neboa/)

Articles:

- EN [Full Text Search With Sqlite](https://kimsereylam.com/sqlite/2020/03/06/full-text-search-with-sqlite.html#create-triggers)

---

⬅️ [💾 Database: Redis](./7-redis.md) |
➡️ [💾 Database: Autres bases de données](./9-autres-bdd.md)
