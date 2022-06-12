# 🐢 Node.js

## 📦 Packages

L’utilisation et la création de packages dans l’écosystème JavaScript est une réelle force et une source d'incroyables opportunités.

(comptage des modules par écosystème)

<img src="./../../../assets/nodejs/module-count.png" alt="Module count" width="556"/>

Malheureusement beaucoup n’arrivent pas à y voir l’émergence d’un pattern qui est de pouvoir segmenter des projets très simplement en différents modules qui seront bien plus facilement maintenables et testables sur long terme. La majorité des développeurs ne réalisent pas la puissance même du système de modules qu’ils ont entre les mains (et il n’est ici pas uniquement question d’open-source ou de npm).

C’est une des remarques que je fais le plus à mes clients en tant qu’Expert Node.js... Tout le monde a une tendance à construire par instinct des monolithes non-modulaire alors que par exemple les algorithmes en lien avec le métier peuvent être gérés au sein d’un module à part (ce genre de détails peut accélérer la productivité d’une équipe par un ratio de 5.. **c’est du vécu**).

Et il n’est pas question ici de nécessairement segmenter en 50 modules... 2 à 4 modules c’est déjà un bon début pour une équipe.

Si vous avez l’occasion ou une idée de packages alors je vous recommande fortement d’essayer l’aventure au moins une fois.

### Articles et talks

- EN [Getting started NPM](https://docs.npmjs.com/getting-started)
- EN [NodeSchool - How to NPM](https://github.com/workshopper/how-to-npm)
- EN [The package.json guide](https://nodejs.dev/learn/the-package-json-guide)
- EN [CJ Silverio, CTO of npm](https://www.youtube.com/watch?v=HH3aNjjhMg8)
- EN [npm and the Future of JavaScript - Laurie Voss, npm, Inc.](https://www.youtube.com/watch?v=0PU-4GGLzGg)
- EN [Radical Modularity - Aria Stewart, npm, Inc.](https://www.youtube.com/watch?v=SsIdWFtp2QA)
- EN [Awesome npm](https://github.com/sindresorhus/awesome-npm)

Il est possible d’utiliser la commande [npm link](https://docs.npmjs.com/cli/v6/commands/npm-link) pour travailler avec des packages ou des modules qui ne sont pas encore publiés sur le registre npm.

### 🆕 Workshops

Vous êtes débutant et vous voulez vous entraîner ? N’hésite pas à découvrir le workshop suivant qui est vraiment simple: EN [How to npm](https://github.com/workshopper/how-to-npm)

### Monorepo & workspaces

Il peut aussi être intéressant d’explorer la piste des monorepos et workspaces qui sont maintenant inclus par défaut sur yarn et npm 7. Il est aussi possible d’utiliser le package lerna.

C’est une solution très intéressante notamment pour n’avoir qu’un seul repo git mais tout en conservant l’avantage de la segmentation en modules/packages. Quelques liens pour vous documenter sur le sujet :

- EN [Simplify your monorepo with npm 7 workspaces](https://dev.to/limal/simplify-your-monorepo-with-npm-7-workspaces-5gmj)
- EN [npm Workspaces (RFC)](https://github.com/npm/rfcs/blob/latest/implemented/0026-workspaces.md)
- EN [Workspaces in Yarn](https://classic.yarnpkg.com/blog/2017/08/02/introducing-workspaces/)
- EN [pnpm Workspace](https://pnpm.js.org/en/workspaces)
- EN [🐉 A tool for managing JavaScript projects with multiple packages.](https://github.com/lerna/lerna)

Je commence pour ma part à peine à les utiliser à travers différents projets, donc je compléterai la section au cours des prochains mois.

---

⬅️ [🐢 Node.js: 📟 CLI)](./cli.md) |
➡️ [🐢 Node.js: 🔍 Debugging & Profiling](./debugging-profiling.md)
