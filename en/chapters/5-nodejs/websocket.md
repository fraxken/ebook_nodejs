# 🐢 Node.js

## WebSocket

It's not uncommon that as a Junior or a newcomer, one of our ideas is to realize an application using real time through WebSockets (be it for a chat, a game or others).

Most of the time everyone will have the reflex to start with the [socket.io](https://socket.io/) library (which I did myself) which is quite accessible for beginners and brings you a lot of cool features like rooms.

However, now with my experience, I would also recommend you to seriously consider not using socket.io directly which will abstract a lot of elements from you and can sometimes prevent you from better understanding different fundamentals (or taking advantage of native features).

It's also I think a great training (if you can do it then socket.io is a summer camp on the side).

In short, don't hesitate to take an interest in the native [WebSockets](https://developer.mozilla.org/fr/docs/Web/API/WebSockets_API) API of the browser (and the npm [WebSockets](https://www.npmjs.com/package/websocket) package for the back-end). You can also be interested in [gRPC](https://www.youtube.com/watch?v=fl9AZieRUaw) which will use [protocol buffers](https://developers.google.com/protocol-buffers) for messages (more technical but it will look better on your resume).

If your need is very high performance I recommend you take a look at [uWebSockets](https://github.com/uNetworking/uWebSockets.js) (which has a minimalist room system too).

### Additional Resources (articles, videos, talks)

- **[Advanced]** [Building a Complete WebSocket App From Scratch with JavaScript (with no libraries) - Erick Wendel](https://www.youtube.com/watch?v=qFoFKLI3O8w)


---

⬅️ [🐢 Node.js: Modules (CJS & ESM)](./modules.md) |
➡️ [🐢 Node.js: 📊 Unit testing and coverage](./unit-testing-and-coverage.md)