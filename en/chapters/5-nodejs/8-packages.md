# 🐢 Node.js

## 📦 Packages

The use and creation of packages in the JavaScript ecosystem is a real strength and a source of incredible opportunities.

(module count by ecosystem)

<img src="./../../../assets/nodejs/module-count.png" alt="Module count" width="800"/>

Unfortunately many fail to see the emergence of a pattern that is to be able to segment projects very simply into different modules that will be much easier to maintain and test in the long term. Most developers don't realize the power of the module system they have in their hands (and it's not only about open-source or npm).

This is one of the remarks I make most to my clients as a Node.js Expert... Everyone has a tendency to build by instinct non-modular monoliths while for example the algorithms related to the business can be managed within a separate module (this kind of details can accelerate the productivity of a team by a ratio of 5... **it's an experience**).

And there is no question here of necessarily segmenting into 50 modules... 2 to 4 modules is already a good start for a team.

If you have the opportunity or an idea of packages then I strongly recommend you to try the adventure at least once.

&nbsp;
### Articles and talks

- [Getting started NPM](https://docs.npmjs.com/getting-started)
- [NodeSchool - How to NPM](https://github.com/workshopper/how-to-npm)
- [The package.json guide](https://nodejs.dev/learn/the-package-json-guide)
- [CJ Silverio, CTO of npm](https://www.youtube.com/watch?v=HH3aNjjhMg8)
- [npm and the Future of JavaScript - Laurie Voss, npm, Inc.](https://www.youtube.com/watch?v=0PU-4GGLzGg)
- [Radical Modularity - Aria Stewart, npm, Inc.](https://www.youtube.com/watch?v=SsIdWFtp2QA)
- [Awesome npm](https://github.com/sindresorhus/awesome-npm)

It is possible to use the [npm link](https://docs.npmjs.com/cli/v6/commands/npm-link) command to work with packages or modules that are not yet published in the npm registry.


&nbsp;
### Workshops
You're a beginner and you want to train ? Discover this simple workshop: EN [How to npm](https://github.com/workshopper/how-to-npm)


&nbsp;
### Monorepo & workspaces

It can also be interesting to explore the monorepos and workspaces which are now included by default on yarn and npm 7. It is also possible to use the learn package.

It's a very interesting solution, especially to have only one git repo but still keeping the advantage of the segmentation in modules/packages. Some links to read more about this subject:

- [Simplify your monorepo with npm 7 workspaces](https://dev.to/limal/simplify-your-monorepo-with-npm-7-workspaces-5gmj)
- [npm Workspaces (RFC)](https://github.com/npm/rfcs/blob/latest/implemented/0026-workspaces.md)
- [Workspaces in Yarn](https://classic.yarnpkg.com/blog/2017/08/02/introducing-workspaces/)
- [pnpm Workspace](https://pnpm.js.org/en/workspaces)
- [🐉 A tool for managing JavaScript projects with multiple packages.](https://github.com/lerna/lerna)

I am just starting to use them for different projects, so I will complete the section in the next few months.

---

⬅️ [🐢 Node.js: 📟 CLI](./7-cli.md) |
➡️ [🐢 Node.js: 🔍 Debugging & Profiling](./9-debugging-and-profiling.md)