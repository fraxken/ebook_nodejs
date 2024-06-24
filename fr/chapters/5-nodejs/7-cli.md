# 🐢 Node.js

## 📟 CLI

L’écosystème Node.js et JavaScript est très vaste et donc très intéressant pour la construction d'outils de type [CLI](https://fr.wikipedia.org/wiki/Interface_en_ligne_de_commande) (command line interface).

Ces outils sont très couramment utilisés et développés pour simplifier la vie aux développeurs et intégrateurs dans divers projets. Beaucoup de framework et librairies embarquent d’ailleurs leur propre CLI pour offrir aux développeurs une expérience optimale. Nous les utilisons au quotidien (parfois sans même nous en rendre compte).

Je recommande souvent au débutant de découvrir Node.js par le biais de la construction d’un CLI (par exemple un petit jeu RPG au format texte jouable avec des commandes.. c’est vraiment une idée de petit projet qui vous pousse à améliorer votre niveau de maîtrise en JavaScript).

Si vous voulez vous y mettre, je vous recommande [ce petit guide](https://x-team.com/blog/a-guide-to-creating-a-nodejs-command/) ou également [Créer un outil en ligne de commande](https://oncletom.io/node.js/chapter-08/) (français) qui va vous apprendre à mettre en place une CLI simple. Aussi je vous recommande de lire la doc [npm link](https://docs.npmjs.com/cli/v6/commands/npm-link) ainsi que la doc sur le champ [bin](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#bin) du package.json.

D’autres ressources (talks et articles) sur le sujet :

- EN [Building Great CLI Experiences in Node](https://www.youtube.com/watch?v=Izx3-KSuaM8&list=PLfMzBWSH11xaZvhv1X5Fq1H-oMdnAtG6k&index=45)
- EN [Building Interactive npm Command Line Modules](https://www.youtube.com/watch?v=QLat0Y3jqUA)
- EN [CLI Tools for All the Things](https://www.youtube.com/watch?v=E0Oz5s9ZjKY)
- EN [My list of awesome crafted packages CLI](https://github.com/fraxken/awesome-crafted-nodejs#cli-tty-etc)
- EN [Node.js CLI Apps Best Practices](https://github.com/lirantal/nodejs-cli-apps-best-practices)

Quelques packages que je vous recommande :

- [kleur](https://github.com/lukeed/kleur) (pour faire du texte en couleur dans le terminal, il y a aussi [chalk](https://github.com/chalk/chalk)).
- [inquirer.js](https://github.com/SBoudrias/Inquirer.js) (il y a aussi [enquirer](https://github.com/enquirer/enquirer)).
- [cliui](https://github.com/yargs/cliui)
- [sade](https://github.com/lukeed/sade)
- [boxen](https://github.com/sindresorhus/boxen)
- [Elegant terminal spinner](https://github.com/sindresorhus/ora)
- [gauge](https://github.com/npm/gauge)
- [@topcli/prompts](https://github.com/TopCli/prompts)

Si jamais vous souhaitez voir un cas concret je vous invite à regarder le CLI d’un de mes projets [Node-secure](https://github.com/ES-Community/nsecure) ou bien [npq](https://github.com/lirantal/npq) de Liran tal.

---

⬅️ [🐢 Node.js: 👽 Native API (création d’addon natif en C, C++ et Rust)](./6-native-api.md) |
➡️ [🐢 Node.js: 📦 Packages](./8-packages.md)
