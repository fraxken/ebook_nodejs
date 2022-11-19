# 💾 Database

## SQLite

Despite several years of looking for a much more optimal solution than [SQLite](https://www.sqlite.org/index.html) for very “simply” local or embedded storage (for [SlimIO](https://github.com/SlimIO/events) in particular) well, I can tell you that I haven't found a better one yet.

SQLite is really a solid and mature project that works very well. For SlimIO I made the effort to read all of the [official documentation](https://www.sqlite.org/docs.html) and it was a huge surprise for me… So many things I didn't know about the operation and the possible optimizations (like what.. always read the doc !).

Drivers available in the ecosystem:

- [sqlite3](https://github.com/mapbox/node-sqlite3)
- [better-sqlite3](https://github.com/JoshuaWise/better-sqlite3) (completely synchronous).
- 🆕 [esqlite](https://github.com/mscdex/esqlite) (very recent driver by mscdex).

Articles:

- EN [Full Text Search With Sqlite](https://kimsereylam.com/sqlite/2020/03/06/full-text-search-with-sqlite.html#create-triggers)

---

⬅️ [💾 Database: Redis](./redis.md) |
➡️ [💾 Database: Other databases](./other-db.md)
