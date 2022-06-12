# 🔐 Security

## Common Security Breach

It is important to understand and train on the most common attacks in Node.js to better prevent them. The following attacks are commonly employed by hackers in the ecosystem:

- [Redos](https://medium.com/@liran.tal/node-js-pitfalls-how-a-regex-can-bring-your-system-down-cbf1dc6c4e02)
- [Directory Traversal](https://snyk.io/vuln/SNYK-JAVA-IOUNDERTOW-32074)
- Brute forces (if no limits or checks.. can be coupled with a dictionary attack if your system indicates whether a mail is used or not).
- [SQL injection](https://snyk.io/learn/sql-injection/) ([also possible with MongoDB](https://blog.sqreen.com/mongodb-will-not-prevent-nosql-injections-in-your-node-js-app/) etc.. don't think you're safe and dig into the subject).

As a bonus, I recommend that you consult [the top 10 attacks listed by OWASP](https://owasp.org/www-project-top-ten/).

---

⬅️ [🔐 Security: Direct and indirect dependencies](./dependencies.md) |
➡️ [🔐 Security: Static Analysis & AST](./ast.md)