# 💾 Database

## Redis

Redis is a very popular database in the ecosystem (and popular generally for the same reasons in other languages ​​too). It stores the data in key/value form directly in memory to allow very fast access performance. However, the data is necessarily volatile and in the event of problems (loss of power or other incidents) it will be permanently lost.

This is why we will rather use it in the following situations:

Share information between several Node.js instances (sessions, various and varied states, temporary messages, etc.).
Exchanging events with other instances (which we will call pub-sub.. we will talk about this in more detail in the next chapters).

To give you an example, it would be interesting to use Redis for building a real-time chat when you want to distribute your users over several Node.js instances. Redis will be used to synchronize messages and events across different online instances.

To learn more, I recommend a French article by Nicolas Brodin: Discover Redis, a lightning-fast database!

Drivers in the ecosystem:

- [IO Redis](https://github.com/luin/ioredis) (**<u>I recommend you to use this one</u>**).
- [Redis](https://github.com/NodeRedis/node-redis)

Articles or talks:

- EN [Solving Head-Of-Line blocking with auto pipelining, NearForm](https://www.youtube.com/watch?v=0L0ER4pZbX4)
- EN [What is Distributed Caching? Explained with Redis!](https://www.youtube.com/watch?v=U3RkDLtS7uY)

For more talks around Redis, do not hesitate to consult the [Redis Labs](https://www.youtube.com/c/Redislabs/featured) youtube channel.

---

⬅️ [💾 Database: MongoDB](./mongodb.md) |
➡️ [💾 Database: SQLite](./sqlite.md)
