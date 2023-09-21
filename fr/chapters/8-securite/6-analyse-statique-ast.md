# 🔐 Sécurité

## Analyse statique & AST
Dans le cadre de mon projet [NodeSecure](https://github.com/NodeSecure/cli), un de mes objectifs était de réussir à détecter des codes “malicieux” divers et variés qui ont été répertoriés à travers diverses attaques (plusieurs peuvent être retrouvés sur [badjs](https://badjs.org/)).

Quand nous parlons d’analyse statique, il s’agit donc d’analyser un code source sans jamais l’exécuter (sinon c’est plutôt une analyse dynamique). Pour cela nous allons transformer le code en format AST ce qui va rendre l’analyse du code bien plus simple.

J’ai récemment fait [un talk en français](https://www.youtube.com/watch?v=zSYrEbggqWA&feature=youtu.be) sur la manipulation d’AST en JavaScript que je vous recommande de visionner. C’est avec ces techniques que j’ai réussi à créer mon projet [JS-X-Ray](https://github.com/fraxken/js-x-ray) (qui est un outil SAST -> Static Application Security Testing).

Autres talks en lien avec les Abstract Syntax Trees :

- EN [Machine Powered Refactoring: Leverage AST's to Push Your Legacy Code (& the Web) Forward](https://www.youtube.com/watch?v=s8g_cBfm9d0&list=PLfMzBWSH11xaZvhv1X5Fq1H-oMdnAtG6k&index=2)
- EN [What the AST ?](https://www.youtube.com/watch?v=BtD2OrlLBhI&list=PLyspMSh4XhLP-mqulUMcaqTbLo-ZJxSX5&index=36)
- EN [What is an Abstract Syntax Tree? (Nearform)](https://www.nearform.com/blog/what-is-an-abstract-syntax-tree/)
- FR [Sunrise #7 - AST avec Antoine COULON](https://www.youtube.com/watch?v=8l2ByutdFJ8)

Articles écrivent par les membres core de l'équipe NodeSecure:

- EN [A technical tale of NodeSecure - Chapter 2](https://dev.to/nodesecure/a-technical-tale-of-nodesecure-chapter-2-2p17)
- EN [🕶 What it takes to build a Static Analysis tool](https://dev.to/antoinecoulon/what-it-takes-to-build-a-static-analysis-tool-4p40)

---

⬅️ [🔐 Sécurité: Faille de sécurité courante](./5-faille-securite-courante.md) |
➡️ [🔐 Sécurité: Liens et ressources complémentaires à lire](./7-liens-et-ressources.md)
