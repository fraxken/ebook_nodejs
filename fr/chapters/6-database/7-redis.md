# 💾 Database

## Redis

Redis est une base de données très populaire dans l’écosystème (et populaire généralement pour les mêmes raisons dans les autres langages aussi). Elle stocke la donnée sous forme de clé/valeur directement en mémoire pour permettre des performances d’accès très rapide. Néanmoins la donnée est forcément volatile et en cas de problèmes (perte de courant ou autres incidents) elle sera définitivement perdue.

C’est pour cela que nous l’utiliserons plutôt dans les situations suivantes :

- Partager des informations entre plusieurs instances Node.js (sessions, state divers et variés, messages temporaires etc).
- Échanger des évènements avec d’autres instances (ce qu'on appellera pub-sub.. nous en parlerons plus en détails dans les prochains chapitres).

Pour vous fournir un exemple, il serait intéressant d’utiliser Redis pour la construction d’un tchat temps réel dès lors que vous souhaitez répartir vos utilisateurs sur plusieurs instances Node.js. Redis vous servira à synchroniser les messages et les événements au travers des différentes instances en ligne.

Pour en savoir plus, je vous recommande un article français de Nicolas Brodin: [Découvrez Redis, une base de données rapide comme l'éclair !](https://blog.nicolas.brondin-bernard.com/redis-une-base-de-donnees-rapide-comme-l-eclair/)

Drivers dans l’écosystème :

- [IO Redis](https://github.com/luin/ioredis) (**<u>je vous recommande d’utiliser celui-ci</u>**).
- [Redis](https://github.com/NodeRedis/node-redis)

Articles ou talks:

- EN [Solving Head-Of-Line blocking with auto pipelining, NearForm](https://www.youtube.com/watch?v=0L0ER4pZbX4)
- EN 🆕 [What is Distributed Caching? Explained with Redis!](https://www.youtube.com/watch?v=U3RkDLtS7uY)

Pour plus de talks autour de Redis n’hésitez pas à consulter la chaine Youtube [Redis Inc](https://www.youtube.com/@Redisinc).

---

⬅️ [💾 Database: MongoDB](./6-mongodb.md) |
➡️ [💾 Database: SQLite](./8-sqlite.md)
