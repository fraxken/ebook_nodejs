# 🔐 Security

## Direct and indirect dependencies

Projects with indirect dependencies are much more vulnerable as shown in this [recent study](https://arxiv.org/pdf/1902.09217.pdf) or [this article](https://snyk.io/blog/78-of-vulnerabilities-are-found-in-indirect-dependencies-making-remediation-complex/) by snyk. The big problem is that it becomes difficult to simply fix a security flaw quickly since it is not directly related to the dependency you are using.

Avoid at all costs packages with dependencies exceeding a depth of 2-3 packages (this always introduces several indirect dependencies to maintain and secure which can very quickly become complex).

The [nsecure](https://github.com/ES-Community/nsecure) project allows deep analysis of the dependencies of an npm project or package.

<img src="../../../assets/securite/nsecure.png" alt="Nsecure" width="750">

> ⛔ Be careful not to fall into paranoia either. Nor is it always easy to solve problems in a few packages. The important thing is to be aware of the problem and pay attention.

---

⬅️ [🔐 Security: Keep your environment under control](./environment.md) |
➡️ [🔐 Security: Common Security Breach](./common-breach.md)