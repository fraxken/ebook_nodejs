# JavaScript

## 🔧 Engine & VM JavaScript (V8 etc)

Lorsque **vous serez plus à l’aise avec JavaScript** il vous sera nécessaire d’étudier un minimum le fonctionnement des moteurs modernes comme V8, JS Core, SpiderMonkey etc (ce sont eux qui ont la responsabilité d'interpréter et exécuter votre code JavaScript que ce soit dans Node.js ou même dans le navigateur).

Ce n'est clairement pas un investissement à la portée d’un débutant mais plutôt d’un développeur de niveau intermédiaire ou expérimenté 📚. Pour pouvoir mieux comprendre comment votre code sera géré et optimisé il vous sera donc nécessaire d’apprendre les rouages de la machine 😈.

Parmis les articles que je vous recommande très fortement de lire:

- EN [**Débutant**] [How JavaScript works: an overview of the engine, the runtime, and the call stack](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)
- EN [**Débutant**] <https://mathiasbynens.be/notes/shapes-ics>
- EN [**Débutant**] <https://mathiasbynens.be/notes/prototypes>
- EN [**Intermédiaire**] [Whats up with monomorphism](https://mrale.ph/blog/2015/01/11/whats-up-with-monomorphism.html)

Il existe néanmoins des dizaines d’articles tous aussi passionnants que j’ai pris la peine de rassembler ici 👀: <https://github.com/fraxken/VM-Resources>

Quelques talks en plus pour votre plus grand bonheur:

- FR [Comprendre le fonctionnement d'un moteur Javascript (Adrien MARET)](https://www.youtube.com/watch?v=E1hohefv8QI)
- EN [JavaScript engines - how do they even?](https://www.youtube.com/watch?v=p-iiEDtpy6I)
- EN [The Past, Present and Future of JavaScript Engines](https://www.youtube.com/watch?v=iLWDUJMCoWs&list=PLfMzBWSH11xZPfWcC0DqFqKo_reMP58mw&index=45)
- EN [JavaScript Engines: The Good Parts](https://www.youtube.com/watch?v=5nmpokoRaZI&list=PL37ZVnwpeshG2YXJkun_lyNTtM-Qb3MKa&index=11)
- EN [A sneak peek into super optimized code in JS frameworks](https://www.youtube.com/watch?v=_VHNTC67NR8&list=PL37ZVnwpeshHwJPVBqEnZild7QHWhdufu&index=2)
- EN [Embedding V8 in the real world by Stanimira Vlaeva](https://www.youtube.com/watch?v=wz7Znu6tqFw&list=PL37ZVnwpeshHwJPVBqEnZild7QHWhdufu&index=16)
- EN [Parsing JavaScript - better lazy than eager?](https://www.youtube.com/watch?v=Fg7niTmNNLg&list=PL37ZVnwpeshFmAPr65sU2O5WMs7_CGjs_&index=10)
- EN [Essentials of Interpretation](https://www.youtube.com/watch?v=8OYqvwQlJVI&list=PLGNbPb3dQJ_4WT_m3aI3T2LRf2R_FKM2k)

### 😡 La dangereuse mode des benchmarks

Je pense qu’il est important d’aborder le sujet des benchmarks pendant que nous sommes dans la section engine JS. Les développeurs adorent les utiliser comme argument pour justifier divers choix ou idéologies 😰…

Le problème c’est que la plupart du temps ces benchmarks sont complètement ratés et/ou ne sont pas représentatifs d’un workload de production 😂. Même s’ils sont concrets il va vous falloir de l’expérience pour en déduire des conclusions (et encore rien ne dit que le souci vous concerne par ailleurs).

Voici quelques articles pour vous éveiller au sujet:

- EN [Dangers of cross language benchmark games](https://mrale.ph/blog/2011/05/12/dangers-of-cross-language-benchmark-games.html)
- EN [The trap of the performance sweet spot](https://mrale.ph/blog/2011/11/05/the-trap-of-the-performance-sweet-spot.html)
- EN [Performance tuning as the art of weather forecast](https://mrale.ph/blog/2013/04/29/performance-tuning-as-weather-forecast.html)
- EN [The Black Cat of Microbenchmarks](https://mrale.ph/blog/2014/02/23/the-black-cat-of-microbenchmarks.html)
- EN [JavaScript MicroBenchmarks (from Benedikt Meurer)](https://github.com/bmeurer/js-micro-benchmarks)

Même si cela peut paraître difficile à entendre, je pense qu’une personne n’ayant pas de solide connaissance sur le fonctionnement des moteurs JavaScript n’a pas de légitimité à formuler des conclusions à partir des résultats d’un benchmark 💥.

> “The hardest thing of all is to find which operation is more expensive inside the darkness of VM, especially when no operation is performed.” (Vyacheslav Egorov)

Et même les personnes ayant beaucoup d’expérience (dont notamment les contributeurs des moteurs eux-mêmes) ont toujours le doute et préfèrent prendre des pincettes pour chacune de leurs conclusions 😯. C’est vous dire la difficulté de la tâche… savoir si vous allez faire for-in, for-of ou .forEach n’a pas vraiment grand intérêt ici.

> “ 👉 L'optimisation prématurée est la racine de tous les maux (ou, du moins, la plupart d'entre eux) en programmation.” (Donald Knuth)

---

[Page précédente](./online-courses-talks-articles.md)
[Page suivante](../ecmascript/javascript-or-ecmascript.md)
