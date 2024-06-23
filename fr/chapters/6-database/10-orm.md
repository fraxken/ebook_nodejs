# 💾 Database

## ORM ou non ?

C’est une question qui revient souvent: doit-on utiliser un ORM ou non ? **En ce qui me concerne** j’essaye de m’en passer le plus possible lorsque mon besoin reste relativement simple (Néanmoins ce n’est pas tout le temps possible).

Ce qui est certain c’est qu’il faut arrêter d’utiliser [Sequelize](https://sequelize.org/) à tort et à travers (pour avoir fait plusieurs projets avec je peux vous garantir que c’est une véritable horreur). 

Je vous recommande plutôt de jeter un oeil aux projets suivants :

- [MikroORM](https://mikro-orm.io/) 
- [Kysely](https://kysely.dev/) - Si vous êtes plutôt à la recherche d'un query builder.

A noter que si vous utilisez le framework Adonis.js ils ont aussi leur propre ORM [Lucid](https://lucid.adonisjs.com/docs/introduction).

Il y a tout un tas de packages disponibles dans l’écosystème, mais je ne suis pas forcément convaincu par la plupart d’entre eux (Après il y en a sûrement que je n’ai moi-même pas encore découvert).

> Bonus: [I would never use an ORM - Matteo Collina](https://www.youtube.com/watch?v=atABji4xqiI)

---

⬅️ [💾 Database: SQLite](./9-autres-bdd.md) |
➡️ [📡 MQTT (broker): Introduction](../7-mqtt/1-introduction.md)
