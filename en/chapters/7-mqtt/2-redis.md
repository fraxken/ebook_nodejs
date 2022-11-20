# 📡 MQTT (broker)

## Redis 

Redis is often the solution used by many companies to perform pub-sub between several instances of Node.js. It's really very simple to learn (and the same for the implementation on the Infrastructure side). The performances are very largely respectable (after all obviously depends on the need .. but for ordinary mortals it is not bad).

In addition, the database can be used for other needs which often saves the need to set up different solutions. However, I don't think Redis is an optimal solution if your need is more for a Queue with pub-sub (for a Message Bus for example).

---

⬅️ [📡 MQTT (broker): Introduction](./1-introduction.md) |
➡️ [📡 MQTT (broker): RabbitMQ, ZeroMQ](./3-rabbitMQ-zeroMQ.md)