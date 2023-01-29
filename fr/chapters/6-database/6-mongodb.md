# 💾 Database

## MongoDB

La fameuse base de données... celle qui génère joie, pleurs et colère dans l’écosystème. Soyons clair: **MongoDB est la base la plus populaire de l’écosystème**.

Il n’y a rien à dire sur le support du [driver natif](https://github.com/mongodb/node-mongodb-native)… ce qui en fait pour moi une des bases de données les plus solides en termes de support. L’entreprise MongoDB possède d’ailleurs des développeurs Node.js très talentueux comme [Addaleax](https://github.com/addaleax) ce qui renforce tout de même le sentiment de support et de qualité vis à vis des outils que l’éditeur propose à l’écosystème.

J’ai fait mes débuts en Node.js et j’ai comme beaucoup suivi la danse en découvrant MongoDB. **Ce fut une excellente expérience pour moi** qui n’avait fait que du SQL et je dois dire que j’ai toujours plutôt apprécié faire du Mongo (cela m'a ouvert à d’autres horizons et façons de penser).

Néanmoins, j’ai moi-même pris dès le début le temps de bien lire la documentation car j’avais compris **qu’il me fallait arrêter de réfléchir en relationnelle** (sans pour autant trop savoir ce que cela voulait vraiment dire au début). Ma mission chez BNP Paribas sur la construction d’une PaaS m’a permis de pousser ma maîtrise notamment sur la gestion des données shard (avec toutes les contraintes que tu manges sur le coin du nez).

D’ailleurs je n'ai jamais compris le délire derrière Mongoose et l’idée de construire du relationnelle sur une base qui n’est pas relationnelle…

<https://twitter.com/matteocollina/status/894488535595614208>
<img src="../../../assets/matteo-mongoose.png">

Après quelques années, je peux maintenant vous dire que je comprends très bien pourquoi beaucoup de développeurs et architectes râlent sur le fait de choisir MongoDB pour des projets où une base de données relationnelles aurait très largement fait le boulot.  

Il est vrai que beaucoup commencent des projets sur MongoDB alors qu’une base comme PostgreSQL aurait été un bien meilleur choix à tous les niveaux. Beaucoup construisent par conséquent des usines à gaz ou ils essayent de faire de Mongo une base relationnelle 😨.

Je pense qu'il ne faut pas être dans les extrêmes. Si vous êtes un développeur junior je vous recommande d’expérimenter le plus possible avec différentes bases de données.

---

⬅️ [💾 Database: MySQL et MariaDB](./5-mysql-mariadb.md) |
➡️ [💾 Database: Redis](./7-redis.md)
