# 🐢 Node.js

## 🌐 Discovery of the HTTP Node.js ecosystem

&nbsp;
### 🚣 Introduction

It is quite common for new developers to start with [express](https://expressjs.com/fr/) because it is the framework that is directly sold to us as "the most popular" (and obviously the most present in the various tutorials available on the surface).

<img src="./../../../assets/nodejs/download-framework.png" alt="download framework" width="600"/>

However [it's not necessarily the best choice](https://dev.to/romainlanz/why-you-should-drop-expressjs-in-2021-711) because the team behind **express** hardly maintains the framework! (**a V5 expected for six years** 🙊) Moreover, many of the patterns they recommend are completely outdated (still no async/await support ...). You'll be writing code that doesn't include any of the modern practices.

**So how do we choose the right framework?** Well, we should already try to segment these frameworks by family to better understand and discuss the different trade-offs that each solution implies.

These families are the following;

- Small scope
- Big scope
- Full Stack scope

> The segmentation is inspired by an explanation of Romain Lanz in a Adonis.js podcast! (which he himself took from Evan You).

&nbsp;
### 💡 Native HTTP server with Node.js and some links on the protocol.

Before getting into the heart of the matter and talking about the different families of frameworks in the Node.js ecosystem, I think it is important to make a small chapter to talk about the core [http module](https://nodejs.org/api/http.html).


It can be interesting to [study and work on the functioning of a Native HTTP server](https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module). This will not necessarily be directly necessary for production code, but it will allow you to understand, a little better, how to interact in HTTP without having the abstraction of a framework that will handle the difficulty and relous details for you (if you don't already have a lot of experience on the subject obviously).

It is also interesting to have a better understanding of the [HTTP protocol](https://tools.ietf.org/html/rfc7231).

Node.js talks around HTTP 1, 2 and 3 (QUIC) :
- EN  [Implementing HTTP/2 for Node.js Core](https://www.youtube.com/watch?v=7uNGKCao8gA)
- EN  [A QUIC Update](https://www.youtube.com/watch?v=Fu9i2knjq8g)
- FR  [Beginner] [Workshop API REST, RPC & ResourceFUL (talk done by myself for a job)](https://www.dropbox.com/s/gdny6hc2calq0k5/Workshop%20API.mp4?dl=0)

Documentation on how to write a Node.js HTTP server without frameworks:
- [Node.js server without a framework (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework)

I also recommend you to keep an eye on the [undici](https://github.com/nodejs/undici) project which should be the next HTTP Node.js client (rather than using got or axios).

&nbsp;
### 🚁 Framework Small scope

These frameworks or "micro-frameworks/libs" for some 😏 are quite often small and impose very few opinions to the developer (the framework hardly forces you to follow any practices, patterns, X tool rather than Y etc). They are very often simple http routers with modularity provided through a simple middleware system.

It is often the responsibility of the developer for each API to assemble/paste a set of npm packages and middleware together to achieve the expected result.

It is a way of doing things that "often" gives a lot of flexibility and a certain feeling of freedom (which can be perceived positively or negatively depending on one's needs and mentality). It is certainly also a way of doing things that corresponds to many developers who do not particularly like to follow predefined models.

Non-exhaustive list of these frameworks;

- [express](http://expressjs.com/)
- [koa.js 2](https://koajs.com/) (little brother of express, still alive but I don't recommend using this framework for 2021+.).
- [hapi](https://hapi.dev/) (I would have recommended it until recently... but I think that the latest announcements have had a big impact on the maintenance of the different packages).
- [polka](https://github.com/lukeed/polka#readme)
- [fastify.js](https://www.fastify.io/)
- [micro](https://github.com/vercel/micro)

To date, the best maintained framework is **Fastify** (which is supported by the [OpenJS foundation](https://openjsf.org/)). I also use the @next version of polka to build very light micro API (especially for embedded http and CLI).

This also includes frameworks specialized in the creation of microservices like [Moleculer](https://moleculer.services/). However, it is less frequent to meet them in companies (I myself have no real experience with one of these frameworks).

&nbsp;
### ✈️ Framework Big scope

These frameworks often impose a set of opinions from the start and provide you with a set of pre-integrated packages and modules to manage various needs (Template engine, Form Validator, ORM, Auth, Queue, Security etc).

The goal is to quickly bring you added business value and a better developer experience without you having to rebuild the wheel for each feature that is not related to your application's business needs.

The learning curve of these frameworks can be slightly longer because they often require the acquisition of a whole set of additional notions which are themselves often related to the opinions of the framework (Structure of a project, MVC etc...) as well as getting to grips with the elements and code that are often specific to each framework (which is not necessarily a negative point knowing that very often developers have fun recreating this themselves on express).

You will certainly gain in productivity in the long run (especially if you often have to build new projects with important business needs).

As for the Small-scope, these are purely back-end frameworks. The list of "serious" frameworks is nevertheless quite short because it is really very difficult to build and maintain such projects in the long term:

- [Adonis.js](https://adonisjs.com/) (I also recommend you to read the page [Why Adonis.js ?](https://preview.adonisjs.com/why-adonisjs))
- [Nest.js](https://nestjs.com/)

⚠️ **Be careful** because nowadays many old frameworks that are not really maintained anymore are still actively recommended:

- [Sails.js](https://sailsjs.com/) (same for the fork Trails.js). I recommend to read [Don’t Use Sails (or Waterline)](https://kevin.burke.dev/kevin/dont-use-sails-or-waterline/).
- [Loopback 3](https://loopback.io/) (I don't recommend version 4 either).

> I had the opportunity to work professionally with both of these frameworks and I very strongly recommend that you shun them for any new project.
>
> It is not uncommon today for developers to still maintain projects on these frameworks 😨

&nbsp;
### 🌠 Framework Full-stack

I'm not a great specialist on full stack frameworks (I don't have any experience with these frameworks yet because I've done very little front-end in the last years).

But I can tell you that fullstack frameworks are "often" frameworks that will try to bring together front-end and back-end to build the whole thing within a unified abstraction. Their goal is to simplify the development cycle (and the experience of the A.K.A DX developer) through abstractions that will hide various technical details (well, that's the idea... but in reality it can be a source of debate).

But there's a pretty wide variety of choices and ways of doing things, so it's pretty hard to put specific words to those things. The most important thing for me is to understand that there is always the front and back component that will intertwine.

List of frameworks (only those I know):

- [Next.js](https://nextjs.org/) (Use  React.js for  front, not to be confused with Nest.js)
- [Nuxt.js](https://fr.nuxtjs.org/) (Use Vue.js for front)
- [Sapper](https://sapper.svelte.dev/) (Use Svelte.js for front).
- [Gatsby](https://www.gatsbyjs.com/)

> ⛔ I strongly recommend that you avoid the Meteor framework (same craziness as the previous chapter).

&nbsp;
### 🎯 How to choose

If you are a front-end developer with a little interest in the back-end, then it is likely that the full-stack frameworks are more interesting for you (Next, Nuxt or Sapper).

If you rather want to specialize in the back-end then I recommend you to look at both families (small & big scope). As far as I'm concerned I recommend you Fastify and [Adonis](https://adonisjs.com/) / [Nest.js](https://nestjs.com/).

- EN  [Intro to Fastify - Matteo Collina](https://www.youtube.com/watch?v=FQu8FnTzOR0&feature=emb_logo) (podcast [bonus here](https://webrush.io/episodes/episode-96-expressway-to-fastify-with-matteo-collina)).
- EN  [Adonis 5 Tour - Romain Lanz](https://www.youtube.com/watch?v=TysfaNcFX_Y&feature=emb_logo)
- FR  [Beginner] [LMHB #3: MONTER UNE APP WEB RAPIDEMENT AVEC ADONIS.JS FEAT @ROMAINLANZ](https://www.youtube.com/watch?v=vcrjgZezaI0&feature=youtu.be)

👀 A recent article by Snyk talks about [the success of Fastify](https://snyk.io/advisor/hub/what-makes-fastify-a-successful-project/).

If you are rather a purist or a low level developer and you like to master everything from A to Z, then it is likely that the small-scope family is for you. It may be interesting for you to explore the different solutions (even if they are not necessarily mainstream).

> 📌 Let's note that Adonis also has a light version that only includes the bare minimum, which could also be a viable option to visit.

--- 

There is a framework called [Kuzzle](https://kuzzle.io/) that I didn't really know how to classify (it certainly represents a family on its own ^^). I still wanted to talk about it very quickly knowing that the framework has significant support in France.

---

⬅️ [🐢 Node.js: 🐥 Resources for beginners](./beginners-resources.md) |
➡️ [🐢 Node.js: 📰 Conférences and Articles](./conf-and-articles.md)