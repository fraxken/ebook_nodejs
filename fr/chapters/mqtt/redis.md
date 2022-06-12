# 📡 MQTT (broker)

## Redis

Redis est bien souvent la solution utilisée par beaucoup d’entreprises pour effectuer du pub-sub entre plusieurs instances de Node.js. C’est vraiment très simple à prendre en main (et même chose pour la mise en place côté Infrastructure). Les performances sont très largement respectables (après tout dépend évidemment du besoin.. mais pour le commun des mortels ce n’est pas mal).

De plus, la base de données peut être utilisée pour d’autres besoins ce qui permet souvent d’économiser le besoin de mettre en place différentes solutions. Néanmoins je ne pense pas que Redis soit une solution optimale si votre besoin s’oriente plutôt vers une Queue avec pub-sub (pour un Bus de messages par exemple).

---

⬅️ [📡 MQTT (broker): Introduction](./introduction.md) |
➡️ [📡 MQTT (broker): RabbitMQ, ZeroMQ](./rabbitmq.md)
