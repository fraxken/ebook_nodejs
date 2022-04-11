# 🔐 Sécurité

## Garder sous contrôle votre Environnement

Il est impératif de ne pas publier sur Internet (git) un token, un login et/ou un mot de passe. Cela sous-entend qu’il faut absolument éviter de stocker en dur ces informations dans votre code source (quelquefois nous le faisons juste temporairement pour un test et nous ne faisons pas attention au moment de commit…).

Ces informations doivent être stockées dans l'environnement local (elles peuvent être gérées et chargées par projet en utilisant le fichier .env et le paquet npm [dotenv](https://www.npmjs.com/package/dotenv)). Les frameworks high-scope ont d'ailleurs bien souvent une gestion interne déjà opérationnelle (penser à vous documenter).

Dans le cadre de npm, nous vous conseillons d'utiliser [le guide suivant](https://snyk.io/blog/ten-npm-security-best-practices/) qui va vous permettre d’éviter différents vecteurs d’attaques.


---
[Page précédente](./audit.md)
[Page suivante](./dependances-directes-indirectes.md)