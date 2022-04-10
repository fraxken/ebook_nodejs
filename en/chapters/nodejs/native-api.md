# 🐢 Node.js

## 👽 Native API (native addon creation in C and C++)

With Node.js it is also possible to create [low level interfaces (addons)](https://nodejs.org/api/n-api.html) to for example execute libraries written in C, C++.

This can bring a performance advantage (but this is not necessarily always the goal... going from C++ to JavaScript has a significant cost). Sometimes it is also simply because the C/C++ libraries are already very complete and maintained (it would be potentially a waste of time to re-implement everything in JavaScript).

Some examples of NPM packages being native addons :

- [node-argon2](https://github.com/ranisalt/node-argon2)
- [node-sqlite3](https://github.com/mapbox/node-sqlite3)
- [Windrive (Done by myself to get informations on the system)](https://github.com/SlimIO/Windrive)

Moreover, to install these packages, you often need to install various dependencies to be able to compile them. I invite you to consult the [installation section](https://github.com/nodejs/node-gyp#installation) of Node-gyp if you were not aware of this. (There is also an option to install Node.js on Windows).

If this is a topic that interests you, [I myself did a talk in 2019](https://www.youtube.com/watch?v=rvmnnlYf3lk) to popularize and explain my first steps in creating native addons for my SlimIO project. 

However, here is a complementary list of resources:

- EN [Node-addon-api](https://github.com/nodejs/node-addon-api) (For those who want to write code in C++).
- EN [Node-gyp](https://github.com/nodejs/node-gyp) (This is the tool that you will use to compile your addon).
- EN [Node.js addons examples](https://github.com/JoseJPR/nodejs-addons)
- EN [Prebuildify](https://github.com/prebuild/prebuildify)

Documentation on GYP tool :
- EN [GYP User Documentation](https://gyp.gsrc.io/docs/UserDocumentation.md)
- EN [GYP Input Format Reference](https://gyp.gsrc.io/docs/InputFormatReference.md)
- EN [GYP Parser](https://github.com/addaleax/gyp-parser)

Talks on the native Node.js API :
- EN [N-API - Next Generation Node API for Native Modules](https://www.youtube.com/watch?v=-Oniup60Afs)
- EN [N-API: The Next Generation Node.js API is Ready!](https://www.youtube.com/watch?v=BrJcsYjp8Nw&list=PLfMzBWSH11xaZvhv1X5Fq1H-oMdnAtG6k&index=54)
- EN [Next Generation N-API: A Hands-on Workshop](https://www.youtube.com/watch?v=-v4Q0y4CeRA&list=PLfMzBWSH11xZPfWcC0DqFqKo_reMP58mw&index=44)
- EN [N-API on JerryScript](https://www.youtube.com/watch?v=Pxabz_FA1IU&list=PLfMzBWSH11xaZvhv1X5Fq1H-oMdnAtG6k&index=69)

### Rust

Various links to make native addons with Rust rather than C and C++ :
- [Node.js N-API for Rust.](https://www.youtube.com/watch?v=UzTPBy2acio)
- [NAPI-RS](https://github.com/napi-rs)
- EN [Supercharge Your Node.js With Rust](https://yieldcode.blog/supercharge-nodejs-with-rust/)

---

[Previous](./event-loop.md)
[Next](./cli.md)