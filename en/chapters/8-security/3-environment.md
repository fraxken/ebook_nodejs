# 🔐 Security

## Keep your environment under control

It is imperative not to publish on the Internet (git) a token, a login and/or a password. This implies that it is absolutely necessary to avoid storing this information in your source code (sometimes we just do it temporarily for a test and we do not pay attention to the moment of commit…).

This information must be stored in the local environment (it can be managed and loaded per project using the .env file and the npm package [dotenv](https://www.npmjs.com/package/dotenv)). High-scope frameworks often have internal management that is already operational (remember to document yourself).

In the context of npm, we advise you to use the [following guide](https://snyk.io/blog/ten-npm-security-best-practices/) which will allow you to avoid different attack vectors.

Possible alternative to the dotenv package:

- [env-var](https://github.com/evanshortiss/env-var)

Other resources that might interest you:

- [Safely store secrets in Git using Blackbox (by Ulises Gascon)](https://www.youtube.com/watch?v=beJT7wMvJo4)
- [Managing Secrets in Node.js with HashiCorp Vault](https://codersociety.com/blog/articles/hashicorp-vault-node)

---

⬅️ [🔐 Security: Audit](./2-audit.md) |
➡️ [🔐 Security: Direct and indirect dependencies](./4-dependencies.md)