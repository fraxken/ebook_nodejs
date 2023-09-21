# 🔬 Monitoring

> ⚠️ La section monitoring n’est pas encore très complète. Attendez-vous à une amélioration de plusieurs pages dans les mois à venir.

## Introduction
En tant que développeur il est important de savoir identifier les métriques et pratiques qui vont nous permettre de réfléchir et construire un monitoring pour nos applications (web ou desktop). **Nous parlerons surtout d’APM ici**.

Certains frameworks modernes comme fastify [ont déjà des packages](https://www.npmjs.com/package/fastify-metrics) pour exporter des métriques (format prometheus).

Les métriques les plus importantes en Node.js sont bien souvent celles qui concernent l’event-loop. Je vous recommande les ressources suivantes qui passeront à travers différents moyens de les exploiter ;

- EN [NodeConf Remote 2020 - Trevor Norris - Introduction to Event Loop Utilization](https://www.youtube.com/watch?v=WetXnEPraYM&list=PL0CdgOSSGlBalMPxFFycq7OIqQF8cJS28&index=13)
- EN [Introduction to Event Loop Utilization in Node.js](https://nodesource.com/blog/event-loop-utilization-nodejs/)

Autres ressources en lien avec le monitoring Node.js :

- EN [Don’t Starve the Event Loop: Measuring and Monitoring Node.js for Performance](https://www.youtube.com/watch?v=9RhOGoChGqo)
- EN [Node.js Monitoring, Alerting and Reliability 101 Ebook](https://risingstack.com/resources/node-js-monitoring-ebook)
- EN [Module core Node.js V8](https://nodejs.org/dist/latest-v15.x/docs/api/v8.html)
- EN [Investigating Node.js Performance: Event Loop and Network I/O (Part 1)](https://medium.com/airtable-eng/node-js-performance-event-loop-and-network-i-o-part-1-ed66076109d3)
- EN [Investigating Node.js Performance: Event Loop and Network I/O (Part 2)](https://medium.com/airtable-eng/investigating-node-js-performance-event-loop-and-network-i-o-part-2-e9d1a8d4da8a)
- EN [The Importance of Measuring Memory Allocation in Node.js Applications](https://www.nearform.com/blog/tracking-memory-allocation-node-js/)
- EN [Monitoring Node.js Performance](https://hire.jonasgalvez.com.br/2023/jan/31/monitoring-nodejs-performance/)

## API
Liens et ressources pour du monitoring d’API HTTP :

- [Health Check Response Format for HTTP APIs](https://tools.ietf.org/id/draft-inadarei-api-health-check-01.html)

## Logs
Liens et ressources pour du monitoring de logs :

- EN [Logs monitoring with Loki, Node.js and Fastify.js](https://dev.to/fraxken/logs-monitoring-with-loki-nodejs-and-fastifyjs-3h8k)
- EN [Fastify.js - Unlock the Power of Runtime Log Level Control (by Manuel Spigolon)](https://www.nearform.com/blog/unlock-the-power-of-runtime-log-level-control/)
- [pino-loki - This package provides a transport for pino that forwards messages to Loki.](https://github.com/Julien-R44/pino-loki)

---

⬅️ [🌇 Architecture & Paradigmes: Autres](../10-architecture/9-others.md) |
➡️ [💻 Système](../12-system/1-system.md)
