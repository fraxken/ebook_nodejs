# 💾 Database

## ORM or not ?

This is a question that often comes up: should we use an ORM or not? **As far as I am concerned**, I try to do without it as much as possible when my need remains relatively simple (Nevertheless it is not always possible).

What is certain is that we must stop using [Sequelize](https://sequelize.org/) wrongly and through (having done several projects with it, I can guarantee you that it is a real horror).

Instead, I recommend you take a look at the following projects:

- [TypeORM](https://typeorm.io/#/) (TypeORM supports both Active Record and Data Mapper patterns)
- [MikroORM](https://mikro-orm.io/) (TypeScript ORM for Node.js based on Data Mapper, Unit of Work and Identity Map patterns).

Note that if you use the Adonis.js framework they also have their own ORM, [Lucid](https://adonisjs.com/docs/4.0/lucid).

There are a whole bunch of packages available in the ecosystem, but I am not necessarily convinced by most of them (Afterwards there are surely some that I myself have not yet discovered).

> Bonus: [I would never use an ORM - Matteo Collina](https://www.youtube.com/watch?v=atABji4xqiI)

---

⬅️ [💾 Database: Other databases](./9-other-db.md) |
➡️ [📡 MQTT (broker): Introduction](../7-mqtt/1-introduction.md)
