# 🌇 Architecture & Paradigms

## JSON Schema

Learning how to write [JSON schemas](https://json-schema.org/) has become a staple of the JavaScript and Node.js ecosystem for me lately. More and more tools and frameworks use schemas for validation, creation of JSON OpenAPI usable in a Swagger interface etc.

The most telling example is certainly the Fastify.js framework. Nevertheless within the framework of the SlimIO project the diagrams are also omnipresent in the management of the configurations.

The [AJV](https://ajv.js.org/) package is the go-to solution if you want to experiment and work with it.

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

- [Get started with validation in Node.js](https://simonplend.com/get-started-with-validation-in-node-js/)

---

⬅️ [🌇 Architecture & Paradigms: CalVer](./calver.md) |
➡️ [🌇 Architecture & Paradigms: Documentation](./documentation.md)