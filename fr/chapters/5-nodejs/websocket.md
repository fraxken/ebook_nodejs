# 🐢 Node.js

## WebSocket

Il n’est pas rare qu’en tant que Junior ou nouveau venu, une de nos idées soit la réalisation d’une application utilisant du temps réel par le biais des WebSockets (que ce soit pour un tchat, un jeu ou autres).

Bien souvent tout le monde aura le réflexe de débuter avec la librairie [socket.io](https://socket.io/) (ce que j’ai moi-même fait) qui est plutôt accessible pour les débutants et vous apporte un tas de fonctionnalités cool comme les rooms.

Néanmoins, maintenant avec mon expérience, je vous recommanderais aussi de prendre sérieusement en considération le fait de ne pas utiliser directement socket.io qui va vous abstraire bon nombre d'éléments et qui peut parfois vous empêcher de mieux comprendre différents fondamentaux (ou de profiter de fonctionnalités natives).

C’est aussi je pense un excellent entraînement (si vous en êtes capable alors socket.io ce sera un camp de vacances à côté).

Bref n’hésitez pas à vous intéresser à l’API native [WebSockets](https://developer.mozilla.org/fr/docs/Web/API/WebSockets_API) du navigateur (et le package npm [WebSockets](https://www.npmjs.com/package/websocket) pour le back-end). Vous pouvez aussi vous intéresser à [gRPC](https://www.youtube.com/watch?v=fl9AZieRUaw) qui utilisera notamment [protocol buffers](https://developers.google.com/protocol-buffers) pour les messages (plus technique mais ça fait tout de suite moins tâche sur votre CV).

Si votre besoin nécessite de très haute performance je vous recommande de jeter un œil à [uWebSockets](https://github.com/uNetworking/uWebSockets.js) (qui possède un système de room minimaliste aussi).

> <u>Faite néanmoins attention à la mentalité abrasive du mainteneur (il n'est pas connu pour être un enfant de chœur et il peut être parfois assez méchant).</u>

### Resources complémentaires (articles, videos, talks)

- EN  **[Avancé]** [Building a Complete WebSocket App From Scratch with JavaScript (with no libraries) - Erick Wendel](https://www.youtube.com/watch?v=qFoFKLI3O8w)

---

⬅️ [🐢 Node.js: Modules (CJS & ESM)](./modules.md) |
➡️ [🐢 📊 Test unitaire et coverage](./test-unitaire-et-coverage.md)
