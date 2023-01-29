# 💾 Database

## ORM ou non ?

C’est une question qui revient souvent: doit-on utiliser un ORM ou non ? **En ce qui me concerne** j’essaye de m’en passer le plus possible lorsque mon besoin reste relativement simple (Néanmoins ce n’est pas tout le temps possible).

Ce qui est certain c’est qu’il faut arrêter d’utiliser [Sequelize](https://sequelize.org/) à tort et à travers (pour avoir fait plusieurs projets avec je peux vous garantir que c’est une véritable horreur). 

Je vous recommande plutôt de jeter un oeil aux projets suivants :

- [TypeORM](https://typeorm.io/#/) (TypeORM supports both Active Record and Data Mapper patterns)
- [MikroORM](https://mikro-orm.io/) (TypeScript ORM for Node.js based on Data Mapper, Unit of Work and Identity Map patterns).

A noter que si vous utilisez le framework Adonis.js ils ont aussi leur propre ORM [Lucid](https://adonisjs.com/docs/4.0/lucid).

Il y a tout un tas de packages disponibles dans l’écosystème, mais je ne suis pas forcément convaincu par la plupart d’entre eux (Après il y en a sûrement que je n’ai moi-même pas encore découvert).

---

⬅️ [💾 Database: SQLite](./9-autres-bdd.md) |
➡️ [📡 MQTT (broker): Introduction](../7-mqtt/1-introduction.md)
