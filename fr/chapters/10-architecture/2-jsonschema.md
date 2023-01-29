# 🌇 Architecture & Paradigmes

## JSON Schema
Apprendre à écrire des [schémas JSON](https://json-schema.org/) est devenu pour moi un incontournable de l’écosystème JavaScript et Node.js ces derniers temps. De plus en plus d’outils et frameworks utilisent des schémas pour faire de la validation, création d’un JSON OpenAPI utilisable dans une interface Swagger etc.

L’exemple le plus parlant est certainement le framework Fastify.js. Néanmoins dans le cadre du projet SlimIO les schémas sont aussi omniprésent dans la gestion des configurations.

Le package [AJV](https://ajv.js.org/) est la solution incontournable si vous voulez expérimenter et travailler avec.

```js
const headersJsonSchema = {
  type: "object",
  properties: {
    Authorization: {
      type: "string",
      pattern: "Bearer .+"
    }
  },
  required: ["Authorization"]
};
```

### Liens complémentaires

- [Get started with JSON Schema in Node.js](https://json-schema.org/blog/posts/get-started-with-json-schema-in-node-js)
- [Fluent JSON schema](https://github.com/fastify/fluent-json-schema)

---

⬅️ [🌇 Architecture & Paradigmes: SemVer](./1-semver.md) |
➡️ [🌇 Architecture & Paradigmes: Documentation](./3-documentation.md)
