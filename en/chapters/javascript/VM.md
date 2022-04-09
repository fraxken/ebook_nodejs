# JavaScript

## 🔧 Engine & VM JavaScript (V8 etc)

When you **are more comfortable with JavaScript** it will be necessary to study a minimum the functioning of modern engines like V8, JS Core, SpiderMonkey etc (they are responsible for interpreting and executing your JavaScript code whether in Node.js or even in the browser).

This is clearly not an investment within the reach of a beginner but rather an intermediate or experienced developer 📚. To be able to better understand how your code will be managed and optimized it will therefore be necessary for you to learn the workings of the machine 😈.

Among the articles I strongly recommend you to read:

- **[Beginner]** [How JavaScript works: an overview of the engine, the runtime, and the call stack](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)
- **[Intermediate]** [Whats up with monomorphism](https://mrale.ph/blog/2015/01/11/whats-up-with-monomorphism.html)
- **[Beginner]** [Shapes and Inline Caches](https://mathiasbynens.be/notes/shapes-ics)
- **[Beginner]** [optimizing prototypes](https://mathiasbynens.be/notes/prototypes)

There are dozens of equally fascinating articles that I have taken the trouble to gather here: https://github.com/fraxken/VM-Resources

A few more talks for your enjoyment:

- [JavaScript engines - how do they even?](https://www.youtube.com/watch?v=p-iiEDtpy6I)
- [The Past, Present and Future of JavaScript Engines](https://www.youtube.com/watch?v=iLWDUJMCoWs&list=PLfMzBWSH11xZPfWcC0DqFqKo_reMP58mw&index=45)
- [JavaScript Engines: The Good Parts](https://www.youtube.com/watch?v=5nmpokoRaZI&list=PL37ZVnwpeshG2YXJkun_lyNTtM-Qb3MKa&index=11)
- [A sneak peek into super optimized code in JS frameworks](https://www.youtube.com/watch?v=_VHNTC67NR8&list=PL37ZVnwpeshHwJPVBqEnZild7QHWhdufu&index=2)
- [Embedding V8 in the real world by Stanimira Vlaeva](https://www.youtube.com/watch?v=wz7Znu6tqFw&list=PL37ZVnwpeshHwJPVBqEnZild7QHWhdufu&index=16)
- [Parsing JavaScript - better lazy than eager?](https://www.youtube.com/watch?v=Fg7niTmNNLg&list=PL37ZVnwpeshFmAPr65sU2O5WMs7_CGjs_&index=10)
- [Essentials of Interpretation](https://www.youtube.com/watch?v=8OYqvwQlJVI&list=PLGNbPb3dQJ_4WT_m3aI3T2LRf2R_FKM2k)

&nbsp;
### 😡 The dangerous hype of benchmarks

I think it's important to address the topic of benchmarks while we're in the engine JS section. Developers love to use them as an argument to justify various choices or ideologies 😰...

The problem is that most of the time these benchmarks are completely messed up and/or are not representative of a production workload 😂. Even if they are concrete you will need experience to deduce conclusions (and still nothing says that the concern concerns you otherwise).

Here are some articles to awaken you to the subject:

- [Dangers of cross language benchmark games](https://mrale.ph/blog/2011/05/12/dangers-of-cross-language-benchmark-games.html)
- [The trap of the performance sweet spot](https://mrale.ph/blog/2011/11/05/the-trap-of-the-performance-sweet-spot.html)
- [Performance tuning as the art of weather forecast](https://mrale.ph/blog/2013/04/29/performance-tuning-as-weather-forecast.html)
- [The Black Cat of Microbenchmarks](https://mrale.ph/blog/2014/02/23/the-black-cat-of-microbenchmarks.html)
- [JavaScript MicroBenchmarks (from Benedikt Meurer)](https://github.com/bmeurer/js-micro-benchmarks)

As hard as it may be to hear, I think that someone without a solid knowledge of how JavaScript engines work has no legitimacy to make conclusions based on benchmark results 💥.

> “The hardest thing of all is to find which operation is more expensive inside the darkness of VM, especially when no operation is performed.” (<u>Vyacheslav Egorov</u>) 

And even people with a lot of experience (including the contributors to the engines themselves) are always in doubt and prefer to take a pinch of salt for each of their conclusions. That's how difficult it is... whether you're going to do for-in, for-of or .forEach is not really relevant here.

> “ 👉 Premature optimization is the root of all (or at least most) evils in programming..” (<u>Donald Knuth</u>) 

---

[Previous](./online-courses-talks-articles.md)
[Next](../ecmascript/javascript-or-ecmascript.md)