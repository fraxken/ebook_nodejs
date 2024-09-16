# 🔐 Sécurité

## Garder sous contrôle votre Environnement

Il est impératif de ne pas publier sur Internet (git) un token, un login et/ou un mot de passe. Cela sous-entend qu’il faut absolument éviter de stocker en dur ces informations dans votre code source (quelquefois nous le faisons juste temporairement pour un test et nous ne faisons pas attention au moment de commit…).

Ces informations peuvent être stockées dans l'environnement local ou dans un KeyVault (elles peuvent être gérées et chargées par projet en utilisant le fichier .env et le paquet npm [dotenv](https://www.npmjs.com/package/dotenv)). Les frameworks high-scope ont d'ailleurs bien souvent une gestion interne déjà opérationnelle (penser à vous documenter).

Avec npm, nous vous conseillons d'utiliser [le guide suivant](https://snyk.io/blog/ten-npm-security-best-practices/) qui va vous permettre d’éviter différents vecteurs d’attaques.

Alternative possible au package dotenv:

- [env-var](https://github.com/evanshortiss/env-var)

Autres ressources qui pourraient vous intéresser:

- [Masterclass | Node.js Configurations (by Matteo Collina)](https://www.youtube.com/watch?v=kVnh_tNYqxk)
- [Safely store secrets in Git using Blackbox (by Ulises Gascon)](https://www.youtube.com/watch?v=beJT7wMvJo4)
- [Managing Secrets in Node.js with HashiCorp Vault](https://codersociety.com/blog/articles/hashicorp-vault-node)

---

⬅️ [🔐 Sécurité: Audit](./2-audit.md) |
➡️ [🔐 Sécurité: Dépendances directes et indirectes](./4-dependances-directes-indirectes.md)
