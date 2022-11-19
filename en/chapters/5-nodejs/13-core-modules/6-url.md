# 🐢 Node.js

## 🌟 The different core modules

### URL (API WHATWG)

Browser [URL](https://nodejs.org/api/url.html) API implementation. By default available on the Global namespace as for timers. URL is really useful for creating and manipulating URLs (like for path, many inexperienced developers will build homemade solutions when this API would allow them to do what they want very simply).

To my taste, it should be used much more (even to declare and identify a URL in JavaScript code). The evolution and maintenance of codes will be much simpler.

```js
const myURL = new URL("https://example.org/?abc=123");
console.log(myURL.searchParams.get("abc"));
// Prints 123

myURL.searchParams.append("abc", "xyz");
console.log(myURF.href);
// Prints https://example.org/?abc=132&abc=xyz

myURL.searchParams.delete("abc");
myURL.searchParams.set("a", "b");
console.log(myURL.href);
// Prints https://example.org/?a=b
```

The constructor will take care of validating the URL for you (an error will be thrown if the URL is not valid). You can then retrieve all the information you want on your URL (protocol, username, password, hostname, port, pathname, query etc).

URL can also be used in ESM with import.meta.url to replace __dirname.

```js
import { readFileSync} from "fs";

const buffer = readFileSync(new URL("./data.proto", import.meta.url));
```

Bonus: [How to migrate from querystring to URLSearchParams in Node.js](https://www.linkedin.com/pulse/how-migrate-from-querystring-urlsearchparams-nodejs-vladim%25C3%25ADr-gorej/?trackingId=OEdtd%2BKZRxWNkgptsoWKlA%3D%3D)

---

⬅️ [🌟 The different core modules: Timers](./5-timers.md) |
➡️ [🌟 The different core modules: OS](./7-os.md)