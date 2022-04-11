# 💾 Database

## MySQL et MariaDB

MySQL et MariaDB sont des bases de données assez populaires et qui ont jusqu’à maintenant été énormément utilisées dans des projets Node.js car une multitude de drivers ont été créés par des développeurs comme [mscdex](https://github.com/mscdex).

Néanmoins je remarque avec les années que les développeurs qui étaient en charge du développement et de la maintenance de ces drivers ne sont plus autant actifs (voir complètement inactif) ce qui laisse les différents drivers avec “moins” de support. Je ne parle même pas du driver officiel MySQL qui a certainement été développé par un stagiaire.

Bref les implémentations et les mises à jour importantes prennent plusieurs années à être implémentées sur les drivers (je pense notamment à toutes les nouveautés avec MySQL 8.. les nouveaux standard d’auth sécurisé etc).

Les drivers disponibles et **actif** :

- [node-mysql2](https://github.com/sidorares/node-mysql2)
- [MariaDB Node.js connector](https://github.com/mariadb-corporation/mariadb-connector-nodejs) (semble être plutôt bien maintenue pour le moment).

> MariaDB est largement moins impactée par mon constat. Donc si vous avez le choix ne prenez pas MySQL.

---
[Page précédente](./postgres.md)
[Page suivante](./mongodb.md)