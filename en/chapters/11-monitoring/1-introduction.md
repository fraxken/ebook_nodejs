# 🔬 Monitoring

## Introduction

> ⚠️ The monitoring section is not yet very complete. Expect a multi-page improvement in the coming months.

As a developer, it is important to know how to identify the metrics and practices that will allow us to reflect and build monitoring for our applications (web or desktop). **We will mainly talk about APM here**.

Some modern frameworks like fastify already have [packages](https://www.npmjs.com/package/fastify-metrics) to export metrics (promeheus format).

The most important metrics in Node.js are often those concerning the event-loop. I recommend the following resources to you which will go through different means of exploiting them;

- [NodeConf Remote 2020 - Trevor Norris - Introduction to Event Loop Utilization](https://www.youtube.com/watch?v=WetXnEPraYM&list=PL0CdgOSSGlBalMPxFFycq7OIqQF8cJS28&index=13)
- [Introduction to Event Loop Usage in Node.js](https://nodesource.com/blog/event-loop-utilization-nodejs/)

Other resources related to Node.js monitoring:

- [Don't Starve the Event Loop: Measuring and Monitoring Node.js for Performance](https://www.youtube.com/watch?v=9RhOGoChGqo)
- [Node.js Monitoring, Alerting and Reliability 101 Ebook](https://risingstack.com/resources/node-js-monitoring-ebook)
- [Module core Node.js V8](https://nodejs.org/dist/latest-v15.x/docs/api/v8.html)
- [Investigating Node.js Performance: Event Loop and Network I/O (Part 1)](https://medium.com/airtable-eng/node-js-performance-event-loop-and-network-i-o-part-1-ed66076109d3)
- [Investigating Node.js Performance: Event Loop and Network I/O (Part 2)](https://medium.com/airtable-eng/investigating-node-js-performance-event-loop-and-network-i-o-part-2-e9d1a8d4da8a)
- [The Importance of Measuring Memory Allocation in Node.js Applications](https://www.nearform.com/blog/tracking-memory-allocation-node-js/)
- [Monitoring Node.js Performance](https://hire.jonasgalvez.com.br/2023/jan/31/monitoring-nodejs-performance/)

## API

Links and resources for HTTP API monitoring:

- [Health Check Response Format for HTTP APIs](https://tools.ietf.org/id/draft-inadarei-api-health-check-01.html)

## Logs

Links and resources for log monitoring :

- [Logs monitoring with Loki, Node.js and Fastify.js](https://dev.to/fraxken/logs-monitoring-with-loki-nodejs-and-fastifyjs-3h8k)
- [Consuming Loki logs with Grafana API and Node.js](https://dev.to/fraxken/consuming-loki-logs-with-grafana-api-and-nodejs-bgg)
- [Fastify.js - Unlock the Power of Runtime Log Level Control (by Manuel Spigolon)](https://www.nearform.com/blog/unlock-the-power-of-runtime-log-level-control/)
- [pino-loki - This package provides a transport for pino that forwards messages to Loki.](https://github.com/Julien-R44/pino-loki)

---

⬅️ [🌇 Architecture & Paradigms: Others](../10-architecture/10-others.md) |
➡️ [💻 System: Introduction](../12-system/1-introduction.md)