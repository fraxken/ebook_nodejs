# 📡 MQTT (broker)

## RabbitMQ, ZeroMQ

When your need is oriented on a Queue with the possibility of pub-sub between several targets it becomes interesting to take a look at the different solutions most commonly used in business:

- [ZeroMQ](https://zeromq.org/)
- [RabbitMQ](https://www.rabbitmq.com/)

I personally have some experience with ZeroMQ as part of my SlimIO project because we manage a message bus between several modules on the central agents (this allows in particular to scale the processing capacity of the product quite monstrously).

However, in all my professional experience, I have rarely experienced a production with a real need for a message broker. You really have to meet world-class load requirements.

---

⬅️ [📡 MQTT (broker): Redis](./2-redis.md) |
➡️ [📡 MQTT (broker): Others](./4-others.md)