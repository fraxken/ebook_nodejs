# 🔐 Sécurité

## Analyse statique & AST
Dans le cadre de mon projet [Node-secure](https://github.com/ES-Community/nsecure), un de mes objectifs était de réussir à détecter des codes “malicieux” divers et variés qui ont été répertoriés à travers diverses attaques (plusieurs peuvent être retrouvés sur [badjs](https://badjs.org/)).

Quand nous parlons d’analyse statique, il s’agit donc d’analyser un code source sans jamais l’exécuter (sinon c’est plutôt une analyse dynamique). Pour cela nous allons transformer le code en format AST ce qui va rendre l’analyse du code bien plus simple.

J’ai récemment fait [un talk en français](https://www.youtube.com/watch?v=zSYrEbggqWA&feature=youtu.be) sur la manipulation d’AST en JavaScript que je vous recommande de visionner. C’est avec ces techniques que j’ai réussi à créer mon projet [JS-X-Ray](https://github.com/fraxken/js-x-ray) (qui est un outil SAST -> Static Application Security Testing).

Autres talks en lien avec les Abstract Syntax Trees :

- EN [Machine Powered Refactoring: Leverage AST's to Push Your Legacy Code (& the Web) Forward](https://www.youtube.com/watch?v=s8g_cBfm9d0&list=PLfMzBWSH11xaZvhv1X5Fq1H-oMdnAtG6k&index=2)
- EN [What the AST ?](https://www.youtube.com/watch?v=BtD2OrlLBhI&list=PLyspMSh4XhLP-mqulUMcaqTbLo-ZJxSX5&index=36)

---
[Page précédente](./faille-securite-courante.md)
[Page suivante](./liens-et-ressources.md)