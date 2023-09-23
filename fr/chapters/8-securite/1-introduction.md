# 🔐 Sécurité

## Introduction

Il est important de rester conscient des faiblesses du runtime Node.js (ainsi que les éléments composant Node.js: [V8](https://v8.dev/), [Libuv](https://github.com/libuv/libuv), HTTP etc…) Cela vous permettra de mieux comprendre et identifier les risques potentiels au sein de vos projets.

Les risques d'attaques ne doivent pas être sous-estimés ou banalisés. Dans le cas de "services Web" exposés (IP publique), une vigilance accrue doit être exercée à tout moment. Une erreur de votre part peut entraîner des dommages et des pertes considérables pour votre client (ou votre projet).

L'utilisation de dépendances tierces, en particulier des "packages" ou des portions de code provenant de l'univers open source doit notamment faire l'objet d'une surveillance importante.

En complément je vous invite aussi à lire les deux documents suivants:

- [Node.js Threat model](https://github.com/nodejs/node/blob/main/SECURITY.md#the-nodejs-threat-model)
- [Node.js Security Best Practices](https://nodejs.org/fr/docs/guides/security)

> [!NOTE]
> La modélisation des menaces (Threat modeling) permet de savoir si une faille (une vulnérabilité) identifié est de la responsabilité du runtime ou du code développé par l'utilisateur (le développeur). C'est un document principalement à destination des personnes travaillant dans la sécurité.

---

⬅️ [📡 MQTT (broker): Autres](../7-mqtt/4-autres.md) |
➡️ [🔐 Sécurité: Audit](./2-audit.md)
