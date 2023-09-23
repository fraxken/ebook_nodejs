# 🔐 Security

## Introduction

It is important to remain aware of the weaknesses of the Node.js runtime (as well as the elements composing Node.js: [V8](https://v8.dev/), [Libuv](https://github.com/libuv/libuv), HTTP etc…) This will allow you to better understand and identify potential risks within your projects.

The risks of attacks should not be underestimated or trivialised. In the case of exposed "web services" (public IP), increased vigilance should be exercised at all times. An error on your part can lead to considerable damage and loss for your client (or your project).

The use of third-party dependencies, in particular "packages" or portions of code from the open source universe, must in particular be subject to significant monitoring.

In addition, I invite you to read the following two documents:

- [Node.js Threat model](https://github.com/nodejs/node/blob/main/SECURITY.md#the-nodejs-threat-model)
- [Node.js Security Best Practices](https://nodejs.org/fr/docs/guides/security)

> [!NOTE]
> Threat modeling enables us to determine whether an identified flaw (vulnerability) is the responsibility of the runtime or the code developed by the user (the developer). This document is mainly intended for people working in security (researcher).

---

⬅️ [📡 MQTT (broker): Others](../7-mqtt/4-others.md) |
➡️ [🔐 Security: Audit](./2-audit.md)