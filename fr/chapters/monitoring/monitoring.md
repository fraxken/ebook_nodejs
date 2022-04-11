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

## API
Liens et ressources pour du monitoring d’API HTTP :

- [Health Check Response Format for HTTP APIs](https://tools.ietf.org/id/draft-inadarei-api-health-check-01.html)

---

⬅️ [🌇 Architecture & Paradigmes: Autres](../architecture/others.md) |
➡️ [💻 Système](../system/system.md)
