# 📡 MQTT (broker)

## RabbitMQ, ZeroMQ

Lorsque votre besoin s’oriente sur une Queue avec la possibilité de pub-sub entre plusieurs targets il devient intéressant de jeter un oeil aux différentes solutions les plus couramments utilisées en entreprise :

- [ZeroMQ](https://zeromq.org/)
- [RabbitMQ](https://www.rabbitmq.com/)

J’ai personnellement un peu d’expérience avec ZeroMQ dans le cadre de mon projet SlimIO car nous gérons un bus de messages entre plusieurs modules sur les agents centraux (cela permet notamment de scale la capacité de traitement du produit assez monstrueusement).

Néanmoins dans toute mon expérience professionnelle je n’ai que rarement vécu une production avec un réel besoin en matière de message broker. Il faut réellement rentrer dans des besoins de charges de classe mondiale.


---
[Page précédente](./redis.md)
[Page suivante](./autres.md)