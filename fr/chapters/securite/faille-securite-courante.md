# 🔐 Sécurité

## Faille de sécurité courante

Il est important de comprendre et se former sur les attaques les plus courantes en Node.js pour mieux les prévenir. Les attaques suivantes sont couramment employées par les pirates dans l’écosystème :

- [ReDos](https://medium.com/@liran.tal/node-js-pitfalls-how-a-regex-can-bring-your-system-down-cbf1dc6c4e02)
- [Directory Traversal](https://snyk.io/vuln/SNYK-JAVA-IOUNDERTOW-32074)
- Brute forces (si aucune limite ou vérification.. peut être couplé avec une attaque par dictionnaire si votre système indique si un mail est utilisé ou non).
- [Injection SQL](https://snyk.io/learn/sql-injection/) ([aussi possible avec MongoDB](https://blog.sqreen.com/mongodb-will-not-prevent-nosql-injections-in-your-node-js-app/) etc.. ne vous croyez pas à l'abri et creuser le sujet).

En bonus je vous recommande d’aller consulter [le top 10 des attaques répertoriés par OWASP](https://owasp.org/www-project-top-ten/).

---
[Page précédente](./dependances-directes-indirectes.md)
[Page suivante](./analyse-statique-ast.md)