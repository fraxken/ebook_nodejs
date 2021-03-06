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

## API

Links and resources for HTTP API monitoring:

- [Health Check Response Format for HTTP APIs](https://tools.ietf.org/id/draft-inadarei-api-health-check-01.html)

---

⬅️ [🌇 Architecture & Paradigms: Others](../architecture/others.md) |
➡️ [💻 System: Introduction](../system/introduction.md)