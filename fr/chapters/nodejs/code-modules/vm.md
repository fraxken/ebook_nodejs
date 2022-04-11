# 🐢 Node.js

## 🌟 Les différents modules core

### VM

Le module [VM](https://nodejs.org/api/vm.html) vous permet d’exécuter du code JavaScript au sein d’un contexte V8 différent et d’avoir notamment un [Realm](https://github.com/tc39/proposal-realms/blob/main/explainer.md) à part. C’est plutôt utile quand votre besoin est d’exécuter du code sans interférer avec le Realm en cours (vôtre processus Node.js).

Néanmoins le module core ne dispose pas d’énormément de fonctionnalités et ne garantit pas que vous pouvez exécuter du code qui vient de l’extérieur (quelqu’un de malveillant pourrait donc quand même s’échapper de la sandbox). J’utilise moi-même ce genre de fonctionnalités dans le cadre de SlimIO pour exécuter des codes fournis par des intégrateurs (dans le cadre d’une modularité par UI).

Si vous avez un besoin similaire je vous recommande jeter un oeil aux modules suivants :

- [Isolated VM](https://github.com/laverdet/isolated-vm)
- [VM2](https://github.com/patriksimek/vm2)

---
[Page précédente](./utilities.md)
[Page suivante](./assert.md)