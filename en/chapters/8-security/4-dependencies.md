# 🔐 Security

## Direct and indirect dependencies

Projects with indirect dependencies are much more vulnerable as shown in this [recent study](https://arxiv.org/pdf/1902.09217.pdf) or [this article](https://snyk.io/blog/78-of-vulnerabilities-are-found-in-indirect-dependencies-making-remediation-complex/) by snyk. The big problem is that it becomes difficult to simply fix a security flaw quickly since it is not directly related to the dependency you are using.

Avoid at all costs packages with dependencies exceeding a depth of 2-3 packages (this always introduces several indirect dependencies to maintain and secure which can very quickly become complex).

The [NodeSecure](https://github.com/NodeSecure/cli) project allows deep analysis of the dependencies of an npm project or package.

<img src="../../../assets/securite/nsecure.png" alt="NodeSecure" width="750">

> [!WARNING]
> Be careful not to fall into paranoia either. Nor is it always easy to solve problems in a few packages. The important thing is to be aware of the problem and pay attention.

## Supply chain attack

For a malicious actor, this means attacking a third-party component such as your dependencies, your CI or any other that could become vulnerable and give access to sensitive information.

In the space of just a few years, this has become a major problem, and one that is widely exploited for a variety of attacks. Initiatives and tools such as [SLSA](https://slsa.dev/) and [Sigstore](https://www.sigstore.dev/) have been developed to guarantee the origin of artifacts (packages, etc.).

Startups such as [Socket.dev](https://socket.dev/) have also emerged, with the aim of providing viable professional solutions to the problem.

---

⬅️ [🔐 Security: Keep your environment under control](./3-environment.md) |
➡️ [🔐 Security: Common Security Breach](./5-common-breach.md)